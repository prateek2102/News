const newsService = require('../services/newsService');

// Fetch and combine news from all 3 APIs
exports.getNews = async (req, res) => {
  const { date, from, to, domain } = req.query;
  
  try {
    const news = await newsService.fetchNews(date, from, to, domain);
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
