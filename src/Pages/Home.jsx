// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ArticleModal from '../components/ArticleModal';

import './Home.css';

const Home = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null); // For modal
  const pageSize = 4;

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  console.log(API_KEY); // Ensure the API key is being correctly loaded from the env file.

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchQuery}&page=${currentPage}&pageSize=${pageSize}`,
          {
            headers: {
              'X-Api-Key': API_KEY, // Pass the API key in the header
            },
          }
        );
        setArticles(res.data.articles);
        setTotalResults(res.data.totalResults);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      }
      setLoading(false);
    };

    fetchNews();
  }, [category, searchQuery, currentPage]);

  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenModal = (article) => setSelectedArticle(article);
  const handleCloseModal = () => setSelectedArticle(null);

  return (
    <div className="home-container">
      <SearchBar onSearch={setSearchQuery} className="search-bar" />
      <h1 className="category-title">
        Top Headlines in {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        articles.map((article, index) => (
          <div className="news-card" key={index}>
            <NewsCard article={article} onOpenModal={handleOpenModal} />
          </div>
        ))
      )}

      {selectedArticle && (
        <ArticleModal
          show={true}
          handleClose={handleCloseModal}
          article={selectedArticle}
        />
      )}

      <div className="pagination-container">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="pagination-info">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
