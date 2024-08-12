const express = require('express');
const mysql = require('mysql2'); // Use mysql2 for better compatibility
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mehvish',
    password: 'Mahvish33@',
    database: 'flashcard_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/add-flashcard', (req, res) => {
    const { question, answer } = req.body;

    const query = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
    connection.query(query, [question, answer], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.stack);
            return res.status(500).send('Error inserting data');
        }
        res.send('Flashcard added successfully');
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
