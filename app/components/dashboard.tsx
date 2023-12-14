"use client";
import { useState } from 'react';

const Dashboard = ({ channel }) => {
  const dummyData = {
    today: Math.floor(Math.random() * 50) + 1,
    lastSevenDays: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50) + 1),
  };

  const [salesData] = useState(dummyData);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>{channel} Sales Dashboard</h2>
      <p>Number of products sold today: {salesData.today}</p>
      <p>Number of products sold in the last seven days:</p>
      <ul>
        {salesData.lastSevenDays.map((sales, index) => (
          <li key={index}>Day {index + 1}: {sales}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
