import React from 'react';
import Logo from "../../assets/Images/logo.png";

function Hero() {
    const sections = [
        {
          title: 'Founding & Historic Moments',
          imageUrl: 'https://api.bnpbd.org/api/upload/images/about-us-l-3-af7f.png', 
          backgroundUrl: '', 
        },
        {
          title: 'A Brief History of Us',
          imageUrl: 'https://api.bnpbd.org/api/upload/images/about-us-l-4-88e9.png', 
          backgroundUrl: 'URL_TO_YOUR_HISTORY_BACKGROUND', 
        },
        {
          title: 'Slogan, Flag & Electoral Symbol',
          imageUrl: 'https://api.bnpbd.org/api/upload/images/about-bnp-20--4563.jpg', 
          backgroundUrl: 'URL_TO_YOUR_SLOGAN_BACKGROUND', 
        },
      ];

  return (
    <div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src='https://api.bnpbd.org/api/upload/images/others-page-banner-1366420-1--e109f.jpg' 
          alt='About Us Banner' 
          style={{ width: '100%', height: 'auto' }}
        />
        <h1 
          style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            borderRadius: '10px'
          }}
        >
          About Us
        </h1>
      </div>
      
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f9f9f9', borderRadius: '10px', margin: '20px auto', width: '100%' }}>
        <img 
          src={Logo} 
          alt='JCD Logo' 
          style={{ width: '150px', height: 'auto', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <h2 style={{ textAlign: 'center', marginBottom: '10px' ,fontSize:'20px' , }}>Bangladesh Jatiotabadi Chatra Dal(JCD)</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', fontSize:'20px', margin: '0 auto' }}>
         was founded on January 1, 1979, based on the principles of Bangladeshi Nationalism,<br></br>
         an ideology that champions the rights of Bangladeshi students from all backgrounds,<br></br>
         regardless of their ethnicity, gender, or race.
        </p>
      </section>

      <section>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            width: '300px',
            height: '400px',
            backgroundImage: `url(${section.backgroundUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, boxShadow 0.3s ease',
            overflow: 'hidden',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <img
              src={section.imageUrl}
              alt={section.title}
              style={{ maxWidth: '90%', maxHeight: '300px', objectFit: 'contain', marginBottom: '20px' }}
            />
            <h2 style={{ fontSize: '1.5em', color: '#333', margin: '0' }}>{section.title}</h2>
          </div>
        </div>
      ))}
    </div>
      </section>
    </div>
  );
}

export default Hero;
