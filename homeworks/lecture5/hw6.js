const https = require('https');
/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
    return urls.reduce((prePromise, curUrl) => {
        return prePromise.then(() => {
            return getJSON(curUrl).then(res => {
                results.push(res);
            })
        })
    }, Promise.resolve())
    .then(() => results);
}

// option 1

function getJSON(url) {
  // implement your code here
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent' : 'request'
            }
        };

        const request = https.get(url, options, response => {
            if (response.statusCode !== 200) {

                reject(new Error(`Did not get an OK from the server. Code :${response.statusCode}`));
                response.resume();
                return;
            }

            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch(e) {

                    reject(new Error(`Failed to parse JSON: ${e.message}`));
                }
            });
        });

        request.on('error', err => {

            reject(new Error(`Encountered error trying to make a request: ${err.message}`))
        });
    });
}


// option 2
function getJSON2(url) {
    // return fetch(url).then(res => res.json());
    return fetch(url).then(res => {
        if(!res.ok) {
            throw new Error('Error fetching url');
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

sequencePromise(urls)
    .then(results => {
        console.log('results: ', results);
    })
    .catch(e => {
        console.error('Error: ', e);
    });
