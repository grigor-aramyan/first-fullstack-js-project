const express = require('express');
const jsonParser = express.json();
const router = express.Router();

// MODELS
import User from '../schemas/User';

router.post('/create', jsonParser, function(req, res) {
  const name = req.body.name;
  const age = req.body.age;

  const user = new User({name, age});
  user.save(function(err) {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }

    User.findOne({name: name}, function(err, doc) {
      res.json(doc);
    });
  });
});

router.get('/', function(req, res) {
  res.send('index of users path');
});

router.get('/:userId', function(req, res) {
  res.send(`users detail page. Id: ${req.params.userId}`);
});

export default router;
