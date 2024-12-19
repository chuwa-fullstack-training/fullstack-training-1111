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

app.get('/hw2', (req, res) => {
    const query1 = req.query.query1;
    const query2 = req.query.query2;

    const result = {};
    fetch('https://hn.algolia.com/api/v1/search?query=' + query1 + '&tags=story')
    .then((res) => res.json())
    .then((reshits) => {
        result[query1] = reshits['hits'][0];
        fetch('https://hn.algolia.com/api/v1/search?query=' + query2 + '&tags=story')
        .then((res) => res.json())
        .then((reshits) => {
            result[query2] = reshits['hits'][0];
            res.writeHead(200, { contentType: 'application/json' })
            res.end(JSON.stringify({ result: result}));
        });
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});