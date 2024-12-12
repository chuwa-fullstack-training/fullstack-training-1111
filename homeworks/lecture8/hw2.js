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
const app = express();
const port = 3000;
const {ReadableStream} = require('stream/web');

app.get('/hw2', (req, res) => {
  const getFullURL = (query) => {
    const baseURL = 'https://hn.algolia.com/api/v1/search';
    const paramsTemplate = {
      query: query,
      tags: 'story',
    };
    return `${baseURL}?${new URLSearchParams(paramsTemplate).toString()}`;
  };

  const promise1 = fetch(getFullURL(req.query.query1));
  const promise2 = fetch(getFullURL(req.query.query2));
  console.log(getFullURL(req.query.query1));

  Promise.all([promise1, promise2])
    .then(async (values) => {
      let data = {};
      for (let response of values) {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        let {hits, query} = await readStreamToJson(response.body);

        // data transform
        data[query] = hits?.slice(0, 5)?.map((hit) => ({
          title: hit.title,
          author: hit.author,
          url: hit.url,
        }));
      }
      res.json(data);
    })
    .catch((error) => {
      res.status(400).send(`Error fetching data:: ${error}`);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

async function readStreamToJson(stream) {
  const reader = stream.getReader();
  let chunks = [];

  while (true) {
    const {done, value} = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  const text = Buffer.concat(chunks).toString('utf-8');
  return JSON.parse(text);
}

/**
 * http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * {
  "apple": [
    {
      "title": "Apple Vision Pro: Apple’s first spatial computer",
      "author": "samwillis",
      "url": "https://www.apple.com/newsroom/2023/06/introducing-apple-vision-pro/"
    },
    {
      "title": "macOS unable to open any non-Apple application",
      "author": "mattsolle",
      "url": "https://twitter.com/lapcatsoftware/status/1326990296412991489"
    },
    {
      "title": "U.S. sues Apple, accusing it of maintaining an iPhone monopoly",
      "author": "jcfrei",
      "url": "https://www.nytimes.com/2024/03/21/technology/apple-doj-lawsuit-antitrust.html"
    },
    {
      "title": "The Big Hack: How China Used a Tiny Chip to Infiltrate Amazon and Apple",
      "author": "Osiris30",
      "url": "https://www.bloomberg.com/news/features/2018-10-04/the-big-hack-how-china-used-a-tiny-chip-to-infiltrate-america-s-top-companies"
    },
    {
      "title": "Apple dropped plan for encrypting backups after FBI complained",
      "author": "n1000",
      "url": "https://www.reuters.com/article/us-apple-fbi-icloud-exclusive/exclusive-apple-dropped-plan-for-encrypting-backups-after-fbi-complained-sources-idUSKBN1ZK1CT"
    }
  ],
  "banana": [
    {
      "title": "Banana giant Chiquita held liable by US court for funding paramilitaries",
      "author": "no_exit",
      "url": "https://www.bbc.com/news/articles/c6pprpd3x96o"
    },
    {
      "title": "Banana equivalent dose",
      "author": "soyelmango",
      "url": "http://en.wikipedia.org/wiki/Banana_equivalent_dose"
    },
    {
      "title": "How many radioactive bananas would you need to power a house?",
      "author": "notRobot",
      "url": "https://what-if.xkcd.com/158/"
    },
    {
      "title": "Optimal Peanut Butter and Banana Sandwiches",
      "author": "ethanahte",
      "url": "https://www.ethanrosenthal.com/2020/08/25/optimal-peanut-butter-and-banana-sandwiches/"
    },
    {
      "title": "On bananas and string matching algorithms",
      "author": "cjbprime",
      "url": "http://www.wabbo.org/blog/2014/22aug_on_bananas.html"
    }
  ]
}
 */
