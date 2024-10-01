// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/RiverInsight')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Define your River Schema and Model
const riverSchema = new mongoose.Schema({
    river_name: { type: String, required: true },
    // Add more fields if necessary
});

const rivers = mongoose.model('rivers', riverSchema);

// Search route
app.get('http://localhost:3000/api/explore', async (req, res) => {
    const searchQuery = req.body;

    try {
        const rivers = await rivers.find({ river_name: { $regex: searchQuery, $options: 'i' } }); // Case-insensitive search
        res.json(rivers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rivers', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
