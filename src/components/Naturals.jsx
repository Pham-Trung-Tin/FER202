import React from 'react';
import orchids from './ListOfOrchids';
import OrchidCard from './OrchidCard';
import './Orchids.css';

export default function Naturals({ navigate }) {
  const naturals = orchids.filter(o => o.isNatural);
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="fw-bold text-success" style={{ fontSize: 32, letterSpacing: 1 }}>🌱 Natural Orchids</h2>
          <p className="text-secondary" style={{ fontSize: 18 }}>
            Danh sách các loài lan tự nhiên quý hiếm, đa dạng màu sắc và nguồn gốc.
          </p>
          <hr style={{ width: 80, borderTop: '3px solid #43a047', margin: '18px auto 0 auto', opacity: 0.4 }} />
        </div>
      </div>
      <div className="row justify-content-center g-4">
        {naturals.length === 0 && (
          <div className="col-12 text-center text-muted">Không có hoa lan tự nhiên nào.</div>
        )}
        {naturals.map(orchid => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={orchid.id}>
            <OrchidCard orchid={orchid} navigate={navigate} />
          </div>
        ))}
      </div>
    </div>
  );
}
