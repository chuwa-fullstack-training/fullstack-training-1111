import express from "express";
import axios from 'axios';


// Initialize Express app and define routes
const app = express();

app.get('/hw2', async (req, res) => {
    const {query1, query2} = req.query;
    console.log(query1, query2)
    if (!query1 || !query2) {
        return res.status(400).send('Error: Please provide both "query1" and "query2" query parameters.');
    }
    try {
        // fetch api
        const response1 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
        const result1 = response1.data.hits[0];
        
        const response2 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
        const result2 = response2.data.hits[0]; 

        const finalRes = {
            [query1]: {
                created_at : result1?.created_at,
                title : result1?.title,
            },
            [query2]: {
                created_at : result2?.created_at,
                title : result2?.title,
            }
        }
        res.json(finalRes)

    }catch (err) {
        console.error('Error:', err);
        res.status(500).send('Server Error');  
    }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
