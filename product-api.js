const express = require('express');

const router = express.Router();
router.get('/products', (req, res) => {
  setTimeout(() => {
    res.json([
      { id: 123, name: 'HP Laptop', price: '$122.33' },
      { id: 124, name: 'Del Laptop', price: '$120.33' },
      { id: 125, name: 'MAC Laptop', price: '$127.33' },
      { id: 126, name: 'Lenovo Laptop', price: '$129.33' },
      { id: 127, name: 'Toshiba Laptop', price: '$189.33' },
    ]);
  }, 5000);
});

module.exports = router;
