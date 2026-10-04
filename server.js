const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Menyajikan file frontend (HTML, CSS, JS)

// ==========================================
// KONEKSI MONGODB
// ==========================================
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dont-block-me';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Berhasil terhubung ke MongoDB!'))
.catch((err) => console.error('❌ Gagal terhubung ke MongoDB:', err));

// ==========================================
// 1. MODEL DATABASE (User & Chat)
// ==========================================

// Skema Pengguna (Register & Login)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    role: { type: String, default: 'user' }, // 'owner' atau 'user'
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// Skema Chat Tanya Beruang
const bearChatSchema = new mongoose.Schema({
    roomKey: { type: String, required: true, index: true }, 
    sender: String,   
    text: String,     
    timestamp: { type: Date, default: Date.now }
});
const BearChat = mongoose.model('BearChat', bearChatSchema);


// ==========================================
// 2. ENDPOINT API AUTHENTICATION (Register & Login)
// ==========================================

// Endpoint Register (Buat Akun)
app.post('/api/register', async (req, res) => {
    try {
        const { name, username, password, role } = req.body;
        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Username sudah terdaftar!' });
        }

        const newUser = new User({ 
            name, 
            username, 
            password, 
            role: role || 'user' 
        });
        await newUser.save();
        
        res.status(201).json({ success: true, message: 'Akun berhasil dibuat!', user: { name: newUser.name, username: newUser.username, role: newUser.role } });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Endpoint Login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        
        if (!user) {
            return res.status(400).json({ success: false, message: 'Username atau password salah!' });
        }

        res.json({ success: true, message: 'Login berhasil!', user: { name: user.name, username: user.username, role: user.role } });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Endpoint Ambil Daftar Semua User (Untuk Navigasi Owner)
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({ role: 'user' }).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


// ==========================================
// 3. ENDPOINT API CHAT TANYA BERUANG & KOTAK MASUK
// ==========================================

// Ambil pesan berdasarkan roomKey
app.get('/api/bear-chats/:roomKey', async (req, res) => {
    try {
        const chats = await BearChat.find({ roomKey: req.params.roomKey }).sort({ timestamp: 1 });
        res.json(chats);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Kirim pesan chat baru
app.post('/api/bear-chats', async (req, res) => {
    try {
        const { roomKey, sender, text } = req.body;
        const newChat = new BearChat({ roomKey, sender, text });
        await newChat.save();
        res.status(201).json({ success: true, data: newChat });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Kotak Masuk Owner
app.get('/api/owner/inbox', async (req, res) => {
    try {
        const inbox = await BearChat.aggregate([
            { $sort: { timestamp: -1 } },             {$group: {
                    _id: "$roomKey",
                    lastMessage: { $first: "$text" },
                    lastTime: { $first: "$timestamp" },
                    sender: { $first: "$sender" }
                }
            },
            { $sort: { lastTime: -1 } }
        ]);
        res.json(inbox);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di port ${PORT}`);
});
