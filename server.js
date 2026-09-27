const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Koneksi ke MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Terhubung!'))
    .catch(err => console.error('Koneksi MongoDB Gagal:', err));

// Schema untuk menyimpan riwayat download video TikTok ke MongoDB
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

        // Memanggil API downloader
        const apiResponse = await axios.get(`https://api.ikyyxd.my.id/download/tiktokkv2?url=${encodeURIComponent(url)}`);
        const resultData = apiResponse.data;

        // Simpan data ke MongoDB
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

// Menyajikan file statis (jika ada file CSS/JS terpisah, tapi kalau inline aman)
app.use(express.static(path.join(__dirname)));

// Mengarahkan rute utama ke index.html yang sudah ada
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Menjalankan server port untuk Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
