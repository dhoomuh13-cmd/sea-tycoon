const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Terhubung!'))
    .catch(err => console.error('Koneksi MongoDB Gagal:', err));

const historySchema = new mongoose.Schema({
    platform: String,
    url: String,
    title: String,
    videoUrl: String,
    createdAt: { type: Date, default: Date.now }
});
const History = mongoose.model('DownloadHistory', historySchema);

app.post('/api/download-tiktok', async (req, res) => {
    try {
        let { url } = req.body;
        if (!url) return res.status(400).json({ success: false, message: 'URL tidak boleh kosong!' });

        // Langsung lempar URL apa adanya ke API downloader
        const targetUrl = url.trim();
        const apiResponse = await axios.get(`https://api.ikyyxd.my.id/download/tiktokkv2?url=${encodeURIComponent(targetUrl)}`);
        const resultData = apiResponse.data;

        // Pastikan respons dari API valid memiliki properti result
        if (resultData && resultData.result) {
            const result = resultData.result;
            const videoUrl = Array.isArray(result.video) ? result.video[0] : result.video;

            // Simpan riwayat ke MongoDB Atlas
            const newHistory = new History({
                platform: 'TikTok',
                url: targetUrl,
                title: result.title || 'TikTok Video',
                videoUrl: videoUrl || targetUrl
            });
            await newHistory.save();

            return res.json({ success: true, data: resultData });
        } else {
            return res.status(400).json({ success: false, message: 'API tidak mengembalikan data video.' });
        }

    } catch (error) {
        console.error('Error Backend:', error.message);
        res.status(500).json({ success: false, message: 'Gagal mengambil data dari API downloader.' });
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server aktif dan berjalan di port ${PORT}`);
});
