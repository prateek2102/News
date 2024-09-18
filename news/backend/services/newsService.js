const axios = require('axios');
const { apiKey1, apiKey2, apiKey3 } = require('../config/apiKeys');

const newsApiUrls = [
  {
    url: `https://newsapi.org/v2/everything?q=Apple&from=2024-09-18&sortBy=popularity&apiKey=${apiKey1}`,
    headers: {}
  },
  {
    url: `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey2}`,
    headers: {}
  },
  {
    url: 'https://api.currentsapi.services/v1/search?keywords=Amazon&language=en',
    headers: {
      Authorization: `Bearer ${apiKey3}`, // Currents API requires the Authorization header
      'cache-control': 'no-cache'
    }
  }
];

// Fetch news from the APIs
// Helper function to format date as YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const fetchNews = async (date = '', from = '', to = '', domain = '') => {
  try {
    // If no date is provided, use today's date
    if (!date) {
      date = formatDate(new Date());
    }

    // Ensure `newsApiUrls` is an array of valid URLs
    const newsApiUrl = newsApiUrls;

    // Log the URLs being used
    console.log('Fetching news from the following URLs:', newsApiUrl);

    const apiPromises = newsApiUrls.map(url => {
      if (typeof url !== 'string') {
        throw new Error('Invalid URL provided');
      }
      return axios.get(url, {
        params: {
          date,
          from: from || '', // Provide fallback if empty
          to: to || '',     // Provide fallback if empty
          domain: domain || '' // Provide fallback if empty
        }
      });
    });

    const results = await Promise.all(apiPromises);
    
    // Combine all results into a single array of articles
    const combinedNews = results.flatMap(result => result.data.articles);
    return combinedNews;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    throw new Error('Error fetching news');
  }
};

module.exports = { fetchNews };
