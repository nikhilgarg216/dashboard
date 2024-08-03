import React from 'react';

export default function SingleCard() {
  return (
    <div className="w-100">
      <div className="card p-2" style={{ background: "#1F2029", color: "#fff", minWidth: '300px', padding: '20px' }}>
        <div className="card-body p-0">
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <p className="card-text mb-2" style={{ color: '#888', fontSize: '14px' }}>Net Profit</p>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>$ 6759.25</h2>
              <small className="text-success" style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'green', fontSize: '20px' }}>▲</span>
                <span style={{ marginLeft: '5px' }}>3%</span>
              </small>
            </div>
           <div className="d-flex  flex-column align-items-center">
           <div style={{ 
              width: '90px', 
              height: '90px', 
              borderRadius: '50%', 
              background: 'conic-gradient(#4A90E2 0% 70%, #2C3E50 70% 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                background: '#1F2029',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>70%</span>
                <small style={{ fontSize: '10px', color: '#888' }}>Goal</small>
                <small style={{ fontSize: '10px', color: '#888' }}>Completed</small>
              </div>
            </div>
          <p style={{ color: '#888', fontSize: '12px',  marginBottom: "8px" }}>*The values here have been rounded off.</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}