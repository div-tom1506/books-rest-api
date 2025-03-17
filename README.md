# Books REST API

A simple REST API for managing books using **Node.js**, **Express**, and **MongoDB**.

## Features
- Add a new book
- Get all books
- Get book by ISBN
- Get books by title, author, publisher, or genre
- Update book details by ISBN
- Delete book by ISBN

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- UUID (for generating unique ISBNs)
- Morgan (for logging HTTP requests)

## Installation

### Prerequisites
- **Node.js** installed on your system
- **MongoDB** running locally or via a cloud service (e.g., MongoDB Atlas)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/books-rest-api.git
   cd books-rest-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB (if running locally):
   ```sh
   mongod
   ```
4. Run the server:
   ```sh
   npm start
   ```
   or with **nodemon** (for development):
   ```sh
   nodemon server.js
   ```
5. The API will be available at:
   ```
   http://localhost:3000/api/books
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/books/add` | Add a new book |
| `GET`  | `/api/books/all` | Get all books |
| `GET`  | `/api/books/isbn/:isbn` | Get book by ISBN |
| `GET`  | `/api/books/title/:title` | Get book by title |
| `GET`  | `/api/books/author/:author` | Get books by author |
| `GET`  | `/api/books/publisher/:publisher` | Get books by publisher |
| `GET`  | `/api/books/genre/:genre` | Get books by genre |
| `PUT`  | `/api/books/update/:isbn` | Update book by ISBN |
| `DELETE` | `/api/books/delete/:isbn` | Delete book by ISBN |

## Example Request

### Add a Book
```sh
POST /api/books/add
```
#### Request Body (JSON)
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publisher": "Scribner",
  "genre": "Classic",
  "published_year": 1925
}
```

### Response
```json
{
  "isbn": "generated-uuid",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publisher": "Scribner",
  "genre": "Classic",
  "published_year": 1925,
  "_id": "mongo-object-id",
  "__v": 0
}
```

## License
This project is open-source and available under the [MIT License](LICENSE).
