/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
 
 const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let lastSubmittedData = { title: '', content: '' }; // Store submitted data

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Route to serve the home page
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'home.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading home.html');
            return;
        }

        // Dynamically inject submitted data into HTML
        const updatedHtml = data.replace(
            '<div id="submitted-data"></div>',
            `
          <div id="submitted-data">
            <p>Title: ${lastSubmittedData.title || 'N/A'}</p>
            <p>Content: ${lastSubmittedData.content || 'N/A'}</p>
          </div>
        `
        );

        res.send(updatedHtml);
    });
});

// Route to handle form submissions
app.post('/create-post', (req, res) => {
    // Save submitted data
    lastSubmittedData.title = req.body.title;
    lastSubmittedData.content = req.body.content;

    // Serve the updated home page
    const filePath = path.join(__dirname, 'home.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading home.html');
            return;
        }

        const updatedHtml = data.replace(
            '<div id="submitted-data"></div>',
            `
            <div id="submitted-data">
              <p>Title: ${lastSubmittedData.title || 'N/A'}</p>
              <p>Content: ${lastSubmittedData.content || 'N/A'}</p>
            </div>
          `
        );

        res.send(updatedHtml);
    });
});

// Handle other routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
