import React, { useState } from 'react';

function HeroNotice() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const notices = [
    {
      title: 'Upcoming Event: Tech Conference',
      image: 'URL_TO_TECH_CONFERENCE_IMAGE',
      date: '2024-12-15',
      details: 'Join us for a day of innovation and networking at our annual Tech Conference. Explore the latest trends and connect with industry leaders.',
    },
    {
      title: 'System Maintenance Scheduled',
      image: 'URL_TO_SYSTEM_MAINTENANCE_IMAGE', 
      date: '2024-11-20',
      details: 'Please note that our systems will be undergoing maintenance on November 20th. Services may be temporarily unavailable.',
    },
    {
      title: 'Holiday Office Closure',
      image: 'URL_TO_HOLIDAY_IMAGE', 
      date: '2024-12-25',
      details: 'Our offices will be closed on December 25th for the Christmas holiday. We will resume normal operations on December 26th.',
    },
    
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '20px' }}>
      {/* Search Box */}
      <div style={{ marginBottom: '20px', width: '80%', maxWidth: '600px', display: 'flex' }}>
        <input
          type="text"
          placeholder="Search Notices..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            flex: '1',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
        <button
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        >
          Search
        </button>
      </div>

      {/* Hero Notice Section */}
      <div style={{ textAlign: 'center', width: '80%', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '15px', color: '#333' }}>Important Notices</h1>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          Welcome to our notice board. Stay updated with the latest announcements and important information.
        </p>

        {/* Notices from constant array */}
        <div style={{ marginTop: '30px' }}>
          {notices.map((notice, index) => (
            <div
              key={index}
              style={{ border: '1px solid #eee', padding: '20px', marginBottom: '15px', borderRadius: '8px' }}
            >
              <h3 style={{ color: '#007bff' }}>{notice.title}</h3>
              {notice.image && <img src={notice.image} alt={notice.title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '10px' }} />}
              <p style={{ fontWeight: 'bold' }}>Date: {notice.date}</p>
              <p>{notice.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroNotice;