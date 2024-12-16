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

// Router to handle the query
app.get('/hw2', async (req, res) => {
  const { query1, query2 } = req.query;

  if (!query1 || !query2) {
    return res.status(400).json({ error: 'Missing query1 or query2 parameter' });
  }

  try {
    // Fetch data for query1
    const response1 = await axios.get(`https://hn.algolia.com/api/v1/search`, {
      params: { query: query1, tags: 'story' },
    });

    // Fetch data for query2
    const response2 = await axios.get(`https://hn.algolia.com/api/v1/search`, {
      params: { query: query2, tags: 'story' },
    });

    // Extract the first result from each query's hits
    const result = {
      [query1]: response1.data.hits.length > 0
        ? {
            created_at: response1.data.hits[0].created_at,
            title: response1.data.hits[0].title,
          }
        : null,
      [query2]: response2.data.hits.length > 0
        ? {
            created_at: response2.data.hits[0].created_at,
            title: response2.data.hits[0].title,
          }
        : null,
    };

    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
