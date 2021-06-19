const express = require('express');
const indexService = require('../services');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/data-base64', async (req, res) => {
  const image = await indexService.processImageAsBase64(req.query);

  res.send(`data:image/png;base64, ${image}`);
});

router.get('/url', async (req, res) => {
  const image = await indexService.processImageAsStream(req.query);
  image.pipe(res);
});

module.exports = router;
