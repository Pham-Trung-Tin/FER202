import React from 'react';
import orchids from './ListOfOrchids';
import OrchidCard from './OrchidCard';
import './Orchids.css';

export default function Special({ navigate }) {
  const specials = orchids.filter(o => o.isSpecial);
  return (
    <div className="container py-4">
      <h2 className="text-center text-danger mb-4">Special Orchids</h2>
      <div className="row justify-content-center">
        {specials.map(orchid => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={orchid.id}>
            <OrchidCard orchid={orchid} navigate={navigate} />
          </div>
        ))}
      </div>
    </div>
  );
}
