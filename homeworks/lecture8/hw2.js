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
const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

const fetchQuery = async (url) => {
    try {
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const item = data.hits[0];
          return {
            created_at: item.created_at,
            title: item.title,
          };
        });
    } catch (err) {
      return err;
    }
  }
  
  router.get("/hw2", (req, res) => {
    try {
      const { query1, query2 } = req.query;
      if (!query1 || !query2) {
        res.status(400).json({ error: "Missing query1 or query2" });
      } else {
        const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
        const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;
        const result = {};
        fetchQuery(url1)
        .then((data1) => {
          result[query1] = data1;
          return fetchQuery(url2);
        })
        .then((data2) => {
          result[query2] = data2;
          res.status(200).send(
            `<pre>${JSON.stringify(result, null, 2)}</pre>`
          );
        });
      }
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });
  
  app.use("/", router);
  app.use("*", (req, res) => {
    res.send("404 Not Found");
  });
  
  app.listen(port, () => console.log(`Server is running on port ${port}`));