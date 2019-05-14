import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../components/App';

// ROUTES
import userRoutes from './routes/userRoutes';

const server = express();
server.use(express.static('dist'));

const PORT = 4242;
const DB_URI = 'mongodb://127.0.0.1:27017/myfirstdb';

server.use('/users', userRoutes);

server.get('/*', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
    );

  res.send(`
    <html>
      <head>
        <title>Sample app title</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
      </head>
      <body>
        <div id="root">${initialMarkup}</div>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

mongoose.connect(DB_URI, { useNewUrlParser: true }, function(err) {
  if (err) return console.log(err);

  server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
});

process.on('SIGINT', () => {
  mongoose.disconnect();
  process.exit();
});
