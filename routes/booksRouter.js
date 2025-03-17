const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Books = require('../models/book');

const router = express.Router();

// Add book
router.post('/add', async (req, res) => {
    try {
        const { title, author, publisher, genre, published_year } = req.body;

        if (!title || !author || !publisher || !genre || !published_year) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const uuid = uuidv4();
        const newBook = new Books({
            isbn: uuid,
            title,
            author,
            publisher,
            genre,
            published_year: new Date(published_year)
        });

        const book = await newBook.save();
        res.status(201).json(book);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all books
router.get('/all', async (req, res) => {
    try {
        const books = await Books.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get book by ISBN
router.get('/isbn/:isbn', async (req, res) => {
    try {
        const book = await Books.findOne({ isbn: req.params.isbn });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get book by title
router.get('/title/:title', async (req, res) => {
    try {
        const book = await Books.findOne({ title: req.params.title });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by author
router.get('/author/:author', async (req, res) => {
    try {
        const books = await Books.find({ author: req.params.author });
        if (!books.length) return res.status(404).json({ message: `No books found for author: ${req.params.author}` });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by publisher
router.get('/publisher/:publisher', async (req, res) => {
    try {
        const books = await Books.find({ publisher: req.params.publisher });
        if (!books.length) return res.status(404).json({ message: `No books found for publisher: ${req.params.publisher}` });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by genre
router.get('/genre/:genre', async (req, res) => {
    try {
        const books = await Books.find({ genre: req.params.genre });
        if (!books.length) return res.status(404).json({ message: `No books found for genre: ${req.params.genre}` });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update book by ISBN
router.put('/update/:isbn', async (req, res) => {
    try {
        const { title, author, publisher, genre, published_year } = req.body;

        if (!title || !author || !publisher || !genre || !published_year) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const updatedBook = await Books.findOneAndUpdate(
            { isbn: req.params.isbn },
            { title, author, publisher, genre, published_year: new Date(published_year) },
            { new: true, runValidators: true }
        );

        if (!updatedBook) return res.status(404).json({ message: "Book not found" });

        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete book by ISBN
router.delete('/delete/:isbn', async (req, res) => {
    try {
        const deletedBook = await Books.findOneAndDelete({ isbn: req.params.isbn });

        if (!deletedBook) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book deleted successfully", deletedBook });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
