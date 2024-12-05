/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  return Promise.all(urls.map((url) => getJSON(url)));
}

// option 1
// function getJSON(url) {
//   // this is from hw5
// }

// option 2
function getJSON(url) {
  return fetch(url).then((res) => res.json());
}

// test your code
const urls = [
  "https://api.github.com/search/repositories?q=javascript",
  "https://api.github.com/search/repositories?q=react",
  "https://api.github.com/search/repositories?q=nodejs",
];
