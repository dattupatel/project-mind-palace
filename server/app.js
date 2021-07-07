const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

const PORT = process.env.PORT || 5000;
app.listen(PORT);



// const http = require('http');
// const getFilesAndFolders = require('./utils').getFilesAndFolders;

// const PORT = process.env.PORT || 5000;
// const SERVER = http.createServer((req, res) => {
//     const result = getFilesAndFolders('F:/OneDrive/My Documents');
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(result));
//     res.end();
// });

// SERVER.listen(PORT);

// SERVER.on('listening', () => {
//     console.log('[Server]::LISTEN:%s', PORT);
// });

// SERVER.on('error', (error) => {
//     throw new Error(`[Server]::ERROR:${error.message}`);
// });
