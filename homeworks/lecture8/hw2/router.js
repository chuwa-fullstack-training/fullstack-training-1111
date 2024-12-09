const express = require('express');
const https = require('https');
const router = express.Router();

const fetchJSON = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });


            res.on('end', () => {
                try{
                    resolve(JSON.parse(data));
                }catch(err) {
                    reject(new Error('Error parsing JSON'));
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

router.get('/', async (req, res) => {
    const {query1, query2} = req.query;

    if(!query1 || !query2) {
        res.send('Error: Missing query1 or query2');
    }

    try {
        const [data1, data2] = await Promise.all([
            fetchJSON(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`),
            fetchJSON(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`),
        ])

        const ret = {
            [query1]:{
                created_at: data1.hits[0]?.created_at,
                title: data1.hits[0]?.title,
            },

            [query2]:{
                created_at: data2.hits[0]?.created_at,
                title: data2.hits[0]?.title,
            },
        };

        res.json(ret);
    } catch (err) {
        res.send(`Error fetching data: ${err.message}`);
    }
});

module.exports = router;
