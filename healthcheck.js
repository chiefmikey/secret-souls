import http from 'node:http';

const options = {
  host: 'localhost',
  port: '3005',
  timeout: 2000,
};
const request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode === 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});
request.on('error', (error) => {
  console.log(`ERROR: ${error}`);
  process.exit(1);
});
request.end();
