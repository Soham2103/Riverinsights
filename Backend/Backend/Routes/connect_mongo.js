
const express = require('express');
const connectToMongoDB = require('../handler'); // Make sure the path to 'handler.js' is correct
const router = express.Router();

router.get('/rivers', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const riversCollection = db.collection('rivers'); 
        const rivers = await riversCollection.find({}).toArray();
        res.status(200).json(rivers);
    } catch (error) {
        console.error('Error fetching rivers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;





