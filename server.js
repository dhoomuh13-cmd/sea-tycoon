const express = require('express');
const axios = require('axios');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyediakan file statis dari folder public (tempat index.html berada)
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// KONEKSI MONGODB (Langsung pakai URI)
// ==========================================
const mongoURI = 'mongodb+srv://dhoomuh13_db_user:admin12345@cluster0.kkteamf.mongodb.net/?appName=Cluster0';

mongoose.connect(mongoURI)
.then(() => console.log('Berhasil terhubung ke MongoDB!'))
.catch(err => console.error('Koneksi MongoDB gagal:', err));

// Skema Data untuk Info Update / Saluran Kenangan
const updateSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});
const UpdateModel = mongoose.model('Update', updateSchema);

// ==========================================
// ENDPOINT DATABASE
// ==========================================

// 1. Endpoint untuk mengambil semua data update/kenangan
app.get('/api/updates', async (req, res) => {
    try {
        const updates = await UpdateModel.find().sort({ createdAt: -1 });
        res.json({ success: true, data: updates });
    } catch (error) {
        console.error('Error mengambil update:', error.message);
        res.status(500).json({ success: false, message: 'Gagal mengambil data update.' });
    }
});

// 2. Endpoint untuk menambah data update/kenangan baru
app.post('/api/updates', async (req, res) => {
    try {
        const { title, content, imageUrl } = req.body;
        const newUpdate = new UpdateModel({ title, content, imageUrl });
        await newUpdate.save();
        res.json({ success: true, message: 'Data berhasil disimpan ke database!' });
    } catch (error) {
        console.error('Error menyimpan update:', error.message);
        res.status(500).json({ success: false, message: 'Gagal menyimpan data.' });
    }
});

// ==========================================
// ENDPOINT FITUR LAINNYA (AI & TikTok)
// ==========================================

app.post('/api/chat-ai', async (req, res) => {
    try {
        const userMessage = req.body.message;
        
        if (!userMessage) {
            return res.status(400).json({ 
                success: false, 
                reply: 'Pesan tidak boleh kosong!' 
            });
        }

        const encodedMessage = encodeURIComponent(userMessage);
        const apiUrl = `https://api.ikyyxd.my.id/ai/publicai?apikey=kyzz&q=${encodedMessage}`;
        
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.result) {
            return res.json({
                success: true,
                reply: data.result
            });
        } else {
            return res.json({
                success: false,
                reply: 'Maaf, respons dari server AI tidak valid.'
            });
        }

    } catch (error) {
        console.error('Error saat menghubungi API AI:', error.message);
        return res.status(500).json({
            success: false,
            reply: 'Terjadi kesalahan sistem atau kendala jaringan pada server AI.'
        });
    }
});

app.post('/api/download/tiktok', async (req, res) => {
    try {
        const videoUrl = req.body.url;
        
        if (!videoUrl) {
            return res.status(400).json({ 
                success: false, 
                message: 'URL TikTok tidak boleh kosong!' 
            });
        }

        const encodedUrl = encodeURIComponent(videoUrl);
        const apiUrl = `https://api.ikyyxd.my.id/download/tiktok?apikey=kyzz&url=${encodedUrl}`;
        
        const { data } = await axios.get(apiUrl);

        if (data && data.status) {
            return res.json({
                success: true,
                result: data.result
            });
        } else {
            return res.json({
                success: false,
                message: 'Gagal mengambil data dari TikTok downloader.'
            });
        }

    } catch (error) {
        console.error('Error saat menghubungi API TikTok:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan sistem pada server downloader.'
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Sea Tycoon berhasil berjalan di port ${PORT}`);
});
