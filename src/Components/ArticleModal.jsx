// src/components/ArticleModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ArticleModal = ({ show, handleClose, article }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="modal-title"
      centered // Ensures the modal is centered vertically
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-title">{article.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        {/* Check if article content exists */}
        {article.content ? (
          <p>{article.content}</p>
        ) : (
          <p>No content available for this article.</p>
        )}
        {/* Display "Read Full Article" link if article URL exists */}
        {article.url && (
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-link">
            Read Full Article
          </a>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleModal;
