import axios from 'axios';

export const fetchNews = async (date, from, to, domain) => {
  const response = await axios.get('http://localhost:5000/api/news', {
    params: { date, from, to, domain }
  });
  return response.data;
};
