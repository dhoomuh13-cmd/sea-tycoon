const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyediakan file statis dari folder public (tempat index.html berada)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint Route untuk Chat AI[span_4](start_span)[span_4](end_span)
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
        const apiUrl = `https://api.ikyyxd.my.id/ai/publicai?apikey=kyzz&q=${encodedMessage}`;[span_5](start_span)[span_5](end_span)
        
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

// Endpoint Route untuk TikTok Downloader (Sesuai dokumentasi gambar)[span_6](start_span)[span_6](end_span)
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
        const apiUrl = `https://api.ikyyxd.my.id/download/tiktok?apikey=kyzz&url=${encodedUrl}`;[span_7](start_span)[span_7](end_span)
        
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

// Menjalankan server pada port yang disediakan environment (Railway) atau port 3000[span_8](start_span)[span_8](end_span)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Sea Tycoon berhasil berjalan di port ${PORT}`);[span_9](start_span)[span_9](end_span)
});
