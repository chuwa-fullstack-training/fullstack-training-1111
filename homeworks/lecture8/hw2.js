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


// Check out hw2-app.js

// Here are the results:
// {
//     "apple": [
//       {
//         "created_at": "2023-06-05T19:04:46Z",
//         "title": "Apple Vision Pro: Apple’s first spatial computer"
//       },
//       {
//         "created_at": "2020-11-12T21:00:12Z",
//         "title": "macOS unable to open any non-Apple application"
//       },
//       {
//         "created_at": "2024-03-21T14:37:43Z",
//         "title": "U.S. sues Apple, accusing it of maintaining an iPhone monopoly"
//       },
//       {
//         "created_at": "2018-10-04T09:21:28Z",
//         "title": "The Big Hack: How China Used a Tiny Chip to Infiltrate Amazon and Apple"
//       },
//       {
//         "created_at": "2020-01-21T13:08:02Z",
//         "title": "Apple dropped plan for encrypting backups after FBI complained"
//       },
//       {
//         "created_at": "2021-08-05T20:20:59Z",
//         "title": "Apple's plan to “think different” about encryption opens a backdoor to your life"
//       },
//       {
//         "created_at": "2018-04-19T16:41:57Z",
//         "title": "Apple open-sources FoundationDB"
//       },
//       {
//         "created_at": "2024-01-25T18:03:26Z",
//         "title": "Apple announces changes to iOS, Safari, and the App Store in the European Union"
//       },
//       {
//         "created_at": "2019-03-13T10:20:44Z",
//         "title": "Spotify to Apple: Time to Play Fair"
//       },
//       {
//         "created_at": "2020-06-22T18:32:26Z",
//         "title": "Apple announces it will switch to its own processors for future Macs"
//       },
//       {
//         "created_at": "2021-08-12T22:26:42Z",
//         "title": "Apple's child protection features spark concern within its own ranks: sources"
//       },
//       {
//         "created_at": "2020-08-13T19:03:23Z",
//         "title": "Apple just kicked Fortnite off the App Store"
//       },
//       {
//         "created_at": "2011-08-24T22:37:35Z",
//         "title": "Steve Jobs Resigns as CEO of Apple"
//       },
//       {
//         "created_at": "2024-09-18T01:38:01Z",
//         "title": "Apple mobile processors are now made in America by TSMC"
//       },
//       {
//         "created_at": "2021-01-01T18:10:40Z",
//         "title": "My Experience at Apple"
//       },
//       {
//         "created_at": "2020-07-30T08:06:56Z",
//         "title": "Apple does not keep the 30% commission on a refund"
//       },
//       {
//         "created_at": "2024-05-07T14:37:32Z",
//         "title": "Apple introduces M4 chip"
//       },
//       {
//         "created_at": "2022-12-07T18:06:58Z",
//         "title": "Apple introduces end-to-end encryption for backups"
//       },
//       {
//         "created_at": "2022-07-06T17:01:32Z",
//         "title": "Apple previews Lockdown Mode"
//       },
//       {
//         "created_at": "2020-10-10T07:16:09Z",
//         "title": "Apple tells Telegram to take down protestor channels in Belarus"
//       }
//     ],
//     "banana": [
//       {
//         "created_at": "2024-06-11T14:58:52Z",
//         "title": "Banana giant Chiquita held liable by US court for funding paramilitaries"
//       },
//       {
//         "created_at": "2010-06-14T12:54:07Z",
//         "title": "Banana equivalent dose"
//       },
//       {
//         "created_at": "2022-05-06T01:52:07Z",
//         "title": "How many radioactive bananas would you need to power a house?"
//       },
//       {
//         "created_at": "2020-08-25T16:10:01Z",
//         "title": "Optimal Peanut Butter and Banana Sandwiches"
//       },
//       {
//         "created_at": "2014-08-23T13:42:45Z",
//         "title": "On bananas and string matching algorithms"
//       },
//       {
//         "created_at": "2019-08-13T01:25:40Z",
//         "title": "The fungus that devastates the Cavendish banana has now arrived in Latin America"
//       },
//       {
//         "created_at": "2021-10-11T10:08:18Z",
//         "title": "The US Is a Banana Republic: The 1% Own More Wealth Than the Entire Middle Class"
//       },
//       {
//         "created_at": "2024-11-28T07:49:54Z",
//         "title": "Bananas: Cross-Platform screen sharing made simple"
//       },
//       {
//         "created_at": "2021-01-12T16:14:30Z",
//         "title": "India’s “plantain man” has traveled widely to collect unusual banana varieties"
//       },
//       {
//         "created_at": "2012-05-14T16:52:36Z",
//         "title": "Turn anything into a videogame controller, even a banana"
//       },
//       {
//         "created_at": "2022-03-01T15:20:42Z",
//         "title": "Potato farmers conquer a devastating worm with paper made from bananas"
//       },
//       {
//         "created_at": "2020-01-20T07:02:35Z",
//         "title": "Bananas Are Berries, Strawberries Aren't"
//       },
//       {
//         "created_at": "2018-01-07T23:59:00Z",
//         "title": "The Banana As We Know It Is Dying Again"
//       },
//       {
//         "created_at": "2024-01-12T05:22:16Z",
//         "title": "OpenWrt One/AP-24.XY: new open source router board by OpenWrt and Banana Pi"
//       },
//       {
//         "created_at": "2014-09-10T13:02:08Z",
//         "title": "How the global banana industry is killing the world’s favorite fruit"
//       },
//       {
//         "created_at": "2022-11-14T14:29:04Z",
//         "title": "There was a stretch where phone design went bananas"
//       },
//       {
//         "created_at": "2022-08-22T04:10:52Z",
//         "title": "The GPU Banana Stand"
//       },
//       {
//         "created_at": "2021-09-07T03:44:53Z",
//         "title": "Low Cost Banana Pi BPI-R2 Pro 5-Port Gigabit Ethernet Router Board"
//       },
//       {
//         "created_at": "2016-01-27T06:55:48Z",
//         "title": "HFT in the Banana Land"
//       },
//       {
//         "created_at": "2024-12-08T16:58:48Z",
//         "title": "The Myth of Bananaland"
//       }
//     ]
//   }