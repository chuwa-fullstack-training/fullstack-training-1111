/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 * 
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 * 
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */
 
 
 const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Helper function to fetch data
async function fetchData(query) {
    const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
    try {
        const response = await axios.get(url);
        const hits = response.data.hits;
        // Return the first hit with relevant fields
        if (hits.length > 0) {
            return {
                created_at: hits[0].created_at,
                title: hits[0].title,
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error(`Error fetching data for query: ${query}`, error.message);
        return null;
    }
}

// Route to handle the queries
app.get('/hw2', async (req, res) => {
    const { query1, query2 } = req.query;

    if (!query1 || !query2) {
        return res.status(400).json({ error: 'Both query1 and query2 are required.' });
    }

    try {
        // Fetch results for both queries
        const [result1, result2] = await Promise.all([fetchData(query1), fetchData(query2)]);
        const finalResult = {
            [query1]: result1 || 'No result found',
            [query2]: result2 || 'No result found',
        };

        // Send the response
        res.json(finalResult);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

