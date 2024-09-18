import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { fetchNews } from '../services/newsService';
import { Row, Col, Container, Button } from 'react-bootstrap';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [date, setDate] = useState('');
  
  useEffect(() => {
    const loadNews = async () => {
      const newsData = await fetchNews(date, '', '', '');
      setNews(newsData.slice(0, page * 9));
    };
    loadNews();
  }, [page, date]);

  const handleLoadMore = () => setPage(prev => prev + 1);
  
  return (
    <Container>
      <Row>
        {news.map((article, index) => (
          <Col key={index} sm={4}>
            <NewsCard article={article} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Button onClick={handleLoadMore}>Load More</Button>
      </div>
    </Container>
  );
};

export default NewsList;
