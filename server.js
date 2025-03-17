const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const booksRouter = require('./routes/booksRouter');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

connectToDB();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/books', booksRouter);

app.get('/api/books', (req, res) => {
    res.send('Welcome to the Book API');
});

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Books');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}