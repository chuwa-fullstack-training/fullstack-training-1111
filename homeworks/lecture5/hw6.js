/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here

  return urls.reduce(
    (promiseChain, currentUrl) =>
      promiseChain.then(() => fetchOne(currentUrl)),
    Promise.resolve() 
  )
  .then(() => results); 
}

// option 1
function getJSON(url) {
  // this is from hw5
}

// option 2
// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }
function getJSON(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed with status code: ${res.status}`);
    }
    return res.json();
  });
}
// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];
