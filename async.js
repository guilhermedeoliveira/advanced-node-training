const https = require('https');

const start = Date.now();

function onRequest() {
  https.request('https://www.google.com', res => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(Date.now() - start);
    });
  }).end();
}

onRequest();
onRequest();
onRequest();
onRequest();
onRequest();
onRequest();