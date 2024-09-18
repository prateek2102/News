const express = require('express');
const newsController = require('../controllers/newsController');
const router = express.Router();

// Define the route for fetching news
router.get('/news', newsController.getNews);

module.exports = router;
