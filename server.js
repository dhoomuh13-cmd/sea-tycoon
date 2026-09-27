const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ganti link di bawah ini dengan link MongoDB Atlas kamu yang sudah diisi password
const MONGO_URI = "mongodb+srv://dhoomuh13_db_user:aAGV5J0RJONSCbtI@cluster0.kkteamf.mongodb.net/ruangsantai?appName=Cluster0";

// Hubungkan ke MongoDB Atlas
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Berhasil terhubung ke MongoDB Atlas!"))
.catch(err => console.error("Koneksi MongoDB gagal:", err));

// Middleware untuk membaca format JSON dan file statis dari folder public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
