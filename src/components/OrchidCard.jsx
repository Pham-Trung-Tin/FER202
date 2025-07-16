import React from 'react';
import './OrchidCard.css';

const OrchidCard = ({ orchid, navigate }) => {
  return (
    <div className="orchid-card">
      <img
        src={orchid.image}
        alt={orchid.name}
        style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18, width: '100%' }}
      />
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span className="orchid-title">{orchid.name}</span>
          {orchid.isSpecial && <span className="orchid-badge">Special</span>}
        </div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 4 }}><b>Origin:</b> {orchid.origin}</div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 4 }}><b>Color:</b> {orchid.color}</div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 4 }}><b>Category:</b> {orchid.category}</div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 4 }}>
          <b>Rating:</b> <span style={{ color: '#fbc02d', fontWeight: 600 }}><i className="bi bi-star-fill me-1"></i>{'★'.repeat(orchid.rating)}</span>
        </div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 4 }}>
          <b>Likes:</b> <span style={{ color: '#1976d2', fontWeight: 600 }}><i className="bi bi-hand-thumbs-up-fill me-1"></i>{orchid.numberOfLike}</span>
        </div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 10 }}><b>Natural:</b> {orchid.isNatural ? 'Yes' : 'No'}</div>
        <button
          className="orchid-detail-btn"
          style={{ width: '100%', marginTop: 8, padding: '10px 0', fontSize: 16 }}
          onClick={() => navigate(`/orchid/${orchid.id}`)}
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default OrchidCard;
