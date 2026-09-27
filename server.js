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

// Endpoint Backend untuk Chat AI
app.post('/api/chat-ai', async (req, res) => {
    try {
        let { message } = req.body;
        if (!message) return res.status(400).json({ success: false, message: 'Pesan tidak boleh kosong!' });

        const apiResponse = await axios.get(`https://api.ikyyxd.my.id/ai/gpt-5-mini?question=${encodeURIComponent(message)}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const resultData = apiResponse.data;

        // Cek jika result ada dan tidak kosong, jika kosong tampilkan pesan fallback dari server
        if (resultData && resultData.result && resultData.result.trim() !== "") {
            return res.json({ success: true, reply: resultData.result });
        } else {
            return res.json({ success: true, reply: "Halo! Pesan kamu diterima, tapi API AI sedang mengembalikan respons kosong. Coba tanyakan hal lain." });
        }

    } catch (error) {
        console.error('Error Chat AI:', error.message);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server AI.' });
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
