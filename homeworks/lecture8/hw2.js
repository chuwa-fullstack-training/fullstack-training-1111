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

const express = require('express')
const app = express()
const https = require('https')

const makeRequest = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            })
            
            res.on('end', () => {
                try{
                    resolve(JSON.parse(data))
                } catch(err) {
                    reject(err.message)
                }
            })

        })
        .on('error', (err) => {
            reject(err.message)
        })
    })
   
}

app.get('/hw2', async (req, res) => {
    const { query1, query2 } = req.query 
    const url = 'https://hn.algolia.com/api/v1/search'

    try{
        const { hits: hits1 } = await makeRequest(`${url}?query=${query1}&tags=story`)
        const { hits: hits2 } = await makeRequest(`${url}?query=${query2}&tags=story`)

        let result1 = hits1.reduce((accum, obj) => {
            accum.push({ title: obj.title, author: obj.author, createdAt: obj.created_at })
            return accum
        }, [])

        let result2 = hits2.reduce((accum, obj) => {
            accum.push({ title: obj.title, author: obj.author, createdAt: obj.created_at })
            return accum
        }, [])

        res.json({ [query1]: result1, [query2]: result2 })

        
    } catch(err){
        res.send(err.message)
    }

})


app.listen(3000, () => {
    console.log('hw2 router listening on port 3000!')
})