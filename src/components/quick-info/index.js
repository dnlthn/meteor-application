import React from 'react';

const QuickInfo = ({ email, twitter, github }) => (
  <div
    style={{
      padding: '0 0 0 1.25em',
      borderLeft: '3px solid #5661B3',
      lineHeight: '1.5',
      width: '650px'
    }}
  >
    <div style={{ marginBottom: '1rem' }}>
      <span style={{ fontWeight: '600' }}>Email </span>
      <span style={{ fontWeight: '200' }}>{email}</span>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <span style={{ fontWeight: '600' }}>Twitter </span>
      <span style={{ fontWeight: '200' }}>{twitter}</span>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <span style={{ fontWeight: '600' }}>GitHub </span>
      <span style={{ fontWeight: '200' }}>{github}</span>
    </div>
  </div>
);

export default QuickInfo;
