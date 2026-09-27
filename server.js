const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware untuk memparsing data JSON dan URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Koneksi ke MongoDB Atlas menggunakan variabel environment dari Railway
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Terhubung!'))
    .catch(err => console.error('Koneksi MongoDB Gagal:', err));

// Schema untuk menyimpan riwayat download video TikTok
const historySchema = new mongoose.Schema({
    platform: String,
    url: String,
    title: String,
    videoUrl: String,
    createdAt: { type: Date, default: Date.now }
});
const History = mongoose.model('DownloadHistory', historySchema);

// Endpoint API untuk memproses download TikTok & Simpan ke MongoDB
app.post('/api/download-tiktok', async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) return res.status(400).json({ success: false, message: 'URL tidak boleh kosong!' });

        // Memanggil API downloader TikTok
        const apiResponse = await axios.get(`https://api.ikyyxd.my.id/download/tiktokkv2?url=${encodeURIComponent(url)}`);
        const resultData = apiResponse.data;

        // Simpan riwayat ke MongoDB Atlas
        const newHistory = new History({
            platform: 'TikTok',
            url: url,
            title: resultData.title || 'TikTok Video',
            videoUrl: resultData.video || resultData.data || url
        });
        await newHistory.save();

        res.json({ success: true, data: resultData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Gagal mengambil data dari API downloader.' });
    }
});

// Menyajikan file statis (CSS, JS, gambar) dari dalam folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Mengarahkan rute utama ke public/index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Mengarahkan semua rute lainnya ke public/index.html (aman untuk routing frontend)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan server di port yang disiapkan oleh Railway atau port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server aktif dan berjalan di port ${PORT}`);
});
