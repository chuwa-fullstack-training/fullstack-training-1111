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
const https = require('https');
const app = express();

const fetchData = (query) => {
  return new Promise((resolve, reject) => {
    const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const jsonData = JSON.parse(data);
        resolve(jsonData.hits[0]); 
      });
    }).on('error', (error) => {
      reject(error.message);
    });
  });
};

app.get('/hw2', async (req, res) => {
  const { query1, query2 } = req.query;
  try {
    const result1 = await fetchData(query1);
    const result2 = await fetchData(query2);
    const result = {
      [query1]: {
        created_at: result1.created_at,
        title: result1.title,
      },
      [query2]: {
        created_at: result2.created_at,
        title: result2.title,
      },
    };
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
