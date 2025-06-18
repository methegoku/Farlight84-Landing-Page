import React, { useState } from 'react';
import './PrepRoom.module.style.css'; // or SCSS

const weapons = [
    {
      name: 'M4 Assault Rifle',
      description: 'A versatile assault rifle that\'s easy to learn and very stable.',
      image: '/images/m4.png',
    },
    {
      name: 'Sniper-X',
      description: 'High damage, long range sniper.',
      image: '/images/sniperx.png',
    },
  ];
  
  const vehicles = [
    {
      name: 'Turbo Tank',
      description: 'Heavy armor, slow speed, great for defense.',
      image: '/images/tank.png',
    },
    {
      name: 'Speedster',
      description: 'Fast and agile car, great for rush.',
      image: '/images/speedster.png',
    },
  ];

export default function PrepRoom() {
  const [currentTab, setCurrentTab] = useState('weapons');
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = currentTab === 'weapons' ? weapons : vehicles;
  const currentItem = data[currentIndex];

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="prep-room">
      <div className="tabs">
        <button className={currentTab === 'weapons' ? 'active' : ''} onClick={() => setCurrentTab('weapons')}>Weapons</button>
        <button className={currentTab === 'vehicles' ? 'active' : ''} onClick={() => setCurrentTab('vehicles')}>Vehicles</button>
      </div>

      <div className="main-display">
        <div className="info">
          <h2>{currentItem.name}</h2>
          <p>{currentItem.description}</p>
        </div>
        <div className="image">
          <img src={currentItem.image} alt={currentItem.name} />
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prevItem}>←</button>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`thumb ${idx === currentIndex ? 'selected' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          >
            <img src={item.image} alt="" />
          </div>
        ))}
        <button onClick={nextItem}>→</button>
      </div>
    </div>
  );
}
