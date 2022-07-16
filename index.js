import tickers from './tickers.json' assert { type: 'json' };
import express from 'express';

const port = 3000;
const app = express();

app.get('/ticker/:text', function (req, res) {
  const text = req.params.text.toUpperCase();;
  res.send(tickers[text]);
});

app.listen(port);
