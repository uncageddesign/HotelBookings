const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection){

  const router = express.Router();

  //INDEX
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err})
    });
  });

  // CREATE
  router.post('/', (req, res) => {
    const newBooking = req.body;
    collection.insertOne(newBooking)
    .then((result) => {
      res.json(result.ops[0])
    })
  });

  return router;
};

module.exports = createRouter;
