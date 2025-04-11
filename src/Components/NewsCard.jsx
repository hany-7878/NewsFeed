
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import ArticleModal from './ArticleModal';

const NewsCard = ({ article, onOpenModal }) => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    const toggleFavorite = (e) => {
      e.stopPropagation(); // Prevent click from triggering modal
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!isFavorite) {
        favorites.push(article);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } else {
        const filteredFavorites = favorites.filter(fav => fav.title !== article.title);
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      }
      setIsFavorite(!isFavorite);
    };
  
    return (
      <div className="card" onClick={() => onOpenModal(article)}>
        <img src={article.urlToImage} alt={article.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <button onClick={toggleFavorite} className="btn btn-outline-danger">
            <FaHeart className={isFavorite ? 'text-danger' : ''} />
          </button>
        </div>
      </div>
    );
  };
  

export default NewsCard;
