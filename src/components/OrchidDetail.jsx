import React from 'react';
import orchids from './ListOfOrchids';
import './Orchids.css';

const OrchidDetail = ({ id }) => {
  const orchid = orchids.find(o => o.id === id);
  if (!orchid) return <div className="alert alert-danger">Orchid not found!</div>;
  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', padding: '32px 0' }}>
      <h2 style={{ textAlign: 'center', color: '#4a148c', fontWeight: 700, marginBottom: 32, fontSize: 36 }}>{orchid.name}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={orchid.image} alt={orchid.name} style={{ maxHeight: 320, borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(80,80,180,0.10)' }} />
        <div style={{ width: '100%', maxWidth: 520, marginTop: 32 }}>
          <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px 0 rgba(80,80,180,0.07)', padding: 0, overflow: 'hidden' }}>
            <DetailRow label="Origin" value={orchid.origin} />
            <DetailRow label="Color" value={orchid.color} />
            <DetailRow label="Category" value={orchid.category} />
            <DetailRow label="Rating" value={<span style={{ color: '#fbc02d', fontWeight: 600 }}>{'★'.repeat(orchid.rating)}</span>} />
            <DetailRow label="Likes" value={<span style={{ color: '#1976d2', fontWeight: 600 }}>{orchid.numberOfLike}</span>} />
            <DetailRow label="Natural" value={orchid.isNatural ? 'Yes' : 'No'} />
            <DetailRow label="Special" value={orchid.isSpecial ? 'Yes' : 'No'} />
          </div>
        </div>
      </div>
    </div>
  );
};

function DetailRow({ label, value }) {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '14px 22px', fontSize: 17, alignItems: 'center' }}>
      <span style={{ fontWeight: 700, minWidth: 110 }}>{label}:</span> <span style={{ marginLeft: 8 }}>{value}</span>
    </div>
  );
}

export default OrchidDetail;
