const express = require('express');

const router = express.Router();

const cart = [];
router.post('/updateCart', (req, res) => {
  setTimeout(() => {
    res.json(cart);
  }, 5000);
});

module.exports = router;
