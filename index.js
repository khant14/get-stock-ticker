import tickers from './tickers.json' assert { type: 'json' };
import express from 'express';

const port = 3000;
const app = express();

app.get('/ticker/:text', function (req, res) {
  const text = req.params.text.toUpperCase();
  var ticker = tickers.find(o => o.symbol === text);

  res.send(ticker);
});

app.listen(port);
