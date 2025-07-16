import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OrchidModal = ({ show, handleClose, orchid }) => {
  if (!orchid) return null;
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{orchid.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={orchid.image} alt={orchid.name} className="img-fluid mb-3" style={{maxHeight: 250, objectFit: 'cover'}} />
        <ul className="list-group">
          <li className="list-group-item"><strong>Origin:</strong> {orchid.origin}</li>
          <li className="list-group-item"><strong>Color:</strong> {orchid.color}</li>
          <li className="list-group-item"><strong>Category:</strong> {orchid.category}</li>
          <li className="list-group-item"><strong>Rating:</strong> {'★'.repeat(orchid.rating)}</li>
          <li className="list-group-item"><strong>Likes:</strong> {orchid.numberOfLike}</li>
          <li className="list-group-item"><strong>Natural:</strong> {orchid.isNatural ? 'Yes' : 'No'}</li>
          <li className="list-group-item"><strong>Special:</strong> {orchid.isSpecial ? 'Yes' : 'No'}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrchidModal;
