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
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/hw2", async (req, res) => {
  const { query1, query2 } = req.query;

  if (!query1 || !query2) {
    return res
      .status(400)
      .json({ error: "Both query1 and query2 are required." });
  }

  try {
    const response1 = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
    );
    const appleResult = response1.data.hits[0];

    const response2 = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`
    );
    const bananaResult = response2.data.hits[0];

    const result = {
      apple: appleResult
        ? {
            created_at: appleResult.created_at,
            title: appleResult.title,
          }
        : null,
      banana: bananaResult
        ? {
            created_at: bananaResult.created_at,
            title: bananaResult.title,
          }
        : null,
    };

    res.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from the API." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
