const express = require('express');

const server = express();

server.listen(8000);

server.use(express.json());

