const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.json());

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Books', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }

}

