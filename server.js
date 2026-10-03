const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca JSON & file statis (Frontend)
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// KONEKSI MONGODB
// ==========================================
// Ganti URL di bawah dengan MongoDB Connection String Anda (MongoDB Atlas / Lokal)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dont-block-me';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Berhasil terhubung ke MongoDB!'))
.catch((err) => console.error('❌ Gagal terhubung ke MongoDB:', err));

// Contoh Skema Sederhana untuk Data Kuis/Pengguna Nanti
const quizSchema = new mongoose.Schema({
    creatorName: String,
    createdAt: { type: Date, default: Date.now }
});
const Quiz = mongoose.model('Quiz', quizSchema);

// Endpoint tes koneksi / penyimpanan data awal
app.post('/api/create-quiz', async (req, res) => {
    try {
        const newQuiz = new Quiz({ creatorName: req.body.name || 'Anonim' });
        await newQuiz.save();
        res.status(201).json({ success: true, message: 'Kuis berhasil dibuat dan disimpan ke database!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
