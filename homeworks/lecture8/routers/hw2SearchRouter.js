const express = require('express');
const axios = require('axios'); 
const router = express.Router();


router.get('/hw2', async (req, res) => {
  const { query1, query2 } = req.query;

  if (!query1 || !query2) {
    return res.status(400).json({ error: 'Missing query1 or query2 parameters' });
  }

  try {
    const [response1, response2] = await Promise.all([
      axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`),
      axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`)
    ]);

    const result1 = response1.data.hits[0];
    const query1Result = result1
      ? { created_at: result1.created_at, title: result1.title }
      : { error: 'No results found for query1' };


    const result2 = response2.data.hits[0];
    const query2Result = result2
      ? { created_at: result2.created_at, title: result2.title }
      : { error: 'No results found for query2' };

    res.json({
      [query1]: query1Result,
      [query2]: query2Result
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Hacker News API' });
  }
});

module.exports = router;