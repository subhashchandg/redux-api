const express = require('express');
const ProductRouter = require('./product-api');

const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const PORT = process.env.PORT || 4321;

app.use('/api', ProductRouter);

app.listen(PORT, () => {
  console.log(`API has been started on ${PORT}`);
});
