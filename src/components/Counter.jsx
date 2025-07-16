import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    console.log('Count changed:', count);
    setShowMsg(true);
    const timer = setTimeout(() => setShowMsg(false), 2000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="counter-card">
      <h2>Counter</h2>
      <div className="display-count">{count}</div>
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>Tăng</button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Giảm</button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
      {showMsg && <div className="update-msg">Count is updated</div>}
    </div>
  );
};

export default Counter;
