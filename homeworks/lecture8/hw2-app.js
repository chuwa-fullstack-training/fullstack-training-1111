const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const router = express.Router();

router.get("/hw2", async (req, res) => {
    const { query1, query2 } = req.query;

    const API_URL = "https://hn.algolia.com/api/v1/search?";

    const [response1, response2] = await Promise.all([
        axios.get(API_URL + `query=${query1}&tags=story`),
        axios.get(API_URL + `query=${query2}&tags=story`),
    ]);

    const hits1 = response1.data.hits.map((hit) => ({
        created_at: hit.created_at || '',
        title: hit.title || '',
    }))

    const hits2 = response2.data.hits.map((hit) => ({
        created_at: hit.created_at || '',
        title: hit.title || '',
    }))

    const ans = {
        [query1] : hits1,
        [query2] : hits2,
    };

    res.json(ans)
})

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})