const express = require('express');
const router = express.Router();

const { getAsync } = require('../redis/index');

/* GET statistics. */
router.get('/', async (req, res) => {
  const stats = await getAsync('added_todos')
  res.send({
    "added_todos": stats
  });
});

module.exports = router;
