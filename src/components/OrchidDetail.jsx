import React from 'react';
import orchids from './ListOfOrchids';
import useTheme from './useTheme';
import './Orchids.css';

const OrchidDetail = ({ id }) => {
  const [theme] = useTheme();
  const isDark = theme === 'dark';
  
  const orchid = orchids.find(o => o.id === id);
  if (!orchid) return <div className="alert alert-danger">Orchid not found!</div>;
  
  const containerStyle = {
    background: isDark ? '#121212' : '#f7f8fa',
    minHeight: '100vh',
    padding: '32px 0'
  };
  
  const titleStyle = {
    textAlign: 'center',
    color: isDark ? '#bb86fc' : '#4a148c',
    fontWeight: 700,
    marginBottom: 32,
    fontSize: 36
  };
  
  const cardStyle = {
    background: isDark ? '#1e1e1e' : '#fff',
    borderRadius: 14,
    boxShadow: isDark ? '0 2px 12px 0 rgba(0,0,0,0.3)' : '0 2px 12px 0 rgba(80,80,180,0.07)',
    padding: 0,
    overflow: 'hidden'
  };
  
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{orchid.name}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={orchid.image} alt={orchid.name} style={{ maxHeight: 320, borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(80,80,180,0.10)' }} />
        <div style={{ width: '100%', maxWidth: 520, marginTop: 32 }}>
          <div style={cardStyle}>
            <DetailRow label="Origin" value={orchid.origin} isDark={isDark} />
            <DetailRow label="Color" value={orchid.color} isDark={isDark} />
            <DetailRow label="Category" value={orchid.category} isDark={isDark} />
            <DetailRow label="Rating" value={<span style={{ color: '#fbc02d', fontWeight: 600 }}>{'★'.repeat(orchid.rating)}</span>} isDark={isDark} />
            <DetailRow label="Likes" value={<span style={{ color: '#1976d2', fontWeight: 600 }}>{orchid.numberOfLike}</span>} isDark={isDark} />
            <DetailRow label="Natural" value={orchid.isNatural ? 'Yes' : 'No'} isDark={isDark} />
            <DetailRow label="Special" value={orchid.isSpecial ? 'Yes' : 'No'} isDark={isDark} />
          </div>
        </div>
      </div>
    </div>
  );
};

function DetailRow({ label, value, isDark }) {
  const rowStyle = {
    display: 'flex',
    borderBottom: isDark ? '1px solid #333' : '1px solid #eee',
    padding: '14px 22px',
    fontSize: 17,
    alignItems: 'center',
    color: isDark ? '#e0e0e0' : '#000'
  };
  
  return (
    <div style={rowStyle}>
      <span style={{ fontWeight: 700, minWidth: 110 }}>{label}:</span> <span style={{ marginLeft: 8 }}>{value}</span>
    </div>
  );
}

export default OrchidDetail;
