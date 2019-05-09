const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('index of users path');
});

router.get('/:userId', function(req, res) {
  res.send(`users detail page. Id: ${req.params.userId}`);
});

export default router;
