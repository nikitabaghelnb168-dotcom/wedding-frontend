import React, { useState } from 'react';

const SacredJourneyTimeline = () => {
  const [activeTab, setActiveTab] = useState('day3');

  const timelineData = {
    day0: {
      label: 'DAY 0',
      title: 'ARRIVAL & WELCOME',
      cardHeading: 'WARM WELCOME & PICKUP',
      tag: 'GUEST FIRST',
      description: 'Comfortable pickups arranged from the station/airport to bring you safely to the venue, followed by a warm traditional welcome.'
    },
    day1: {
      label: 'DAY 1',
      title: 'JOURNEY TO THE VALLEY',
      cardHeading: 'SCENIC VALLEY TRAVEL',
      tag: 'BEAUTIFUL DRIVE',
      description: 'A beautiful, organized transit through the lush valleys with refreshing stops, ensuring a smooth and memorable journey to the destination.'
    },
    day2: {
      label: 'DAY 2',
      title: 'THE WEDDING DAY',
      cardHeading: 'SACRED VOWS & CELEBRATIONS',
      tag: 'AUSPICIOUS MOMENT',
      description: 'The main wedding rituals and elegant ceremonies. Every detail managed perfectly so you can immerse yourself in the sacred celebrations.'
    },
    day3: {
      label: 'DAY 3',
      title: 'HOMEBOUND JOURNEY',
      cardHeading: 'FAREWELL & SMOOTH RETURN',
      tag: 'COMPLETE CARE',
      description: 'Post-breakfast, comfortable shuttles will be ready to take you back to Dehradun Airport or Rishikesh Station. Our team will handle all your luggage and ensure your return journey is completely seamless and worry-free.'
    }
  };

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'serif', textAlign: 'center', backgroundColor: '#fff' }}>
      {/* Spiritual Top Subheading */}
      <div style={{ color: '#b33925', fontSize: '14px', letterSpacing: '2px', marginBottom: '5px' }}>
        ॐ NAMAH SHIVAYA
      </div>
      
      {/* Main Section Title */}
      <h2 style={{ fontSize: '32px', fontWeight: '300', letterSpacing: '3px', margin: '0 0 40px 0', color: '#1a1a1a' }}>
        YOUR SACRED JOURNEY
      </h2>

      {/* Timeline Tabs Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {Object.keys(timelineData).map((dayKey) => {
          const isActive = activeTab === dayKey;
          return (
            <button
              key={dayKey}
              onClick={() => setActiveTab(dayKey)}
              style={{
                width: '180px',
                padding: '20px 10px',
                border: isActive ? '2px solid #000' : '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                boxShadow: isActive ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '11px', color: isActive ? '#b33925' : '#999', fontWeight: 'bold', marginBottom: '8px' }}>
                {timelineData[dayKey].label}
              </div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', letterSpacing: '1px' }}>
                {timelineData[dayKey].title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Details Card */}
      <div style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '30px',
        borderLeft: '4px solid #d97706',
        borderRadius: '4px',
        backgroundColor: '#fffbeb',
        textAlign: 'left',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        position: 'relative'
      }}>
        {/* Card Header & Tag */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', letterSpacing: '0.5px' }}>
            {timelineData[activeTab].cardHeading}
          </h3>
          <span style={{
            backgroundColor: '#fee2e2',
            color: '#b91c1c',
            fontSize: '11px',
            fontWeight: 'bold',
            padding: '4px 12px',
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {timelineData[activeTab].tag}
          </span>
        </div>

        {/* Description */}
        <p style={{ margin: 0, fontSize: '14px', color: '#4a4a4a', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
          {timelineData[activeTab].description}
        </p>
      </div>
    </div>
  );
};

export default SacredJourneyTimeline;