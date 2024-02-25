import React, { useState, useEffect } from 'react';

function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: 'Data Science', description: 'Simple & easy distinguish in a ...', icon: 'flaticon-data' },
    { title: 'Machine Learning', description: 'Any right to find fault with ...', icon: 'flaticon-brain' },
    { title: 'Customer Support', description: 'Beguiled & demoralized by the charms ...', icon: 'flaticon-vr' },


    { title: 'D', description: 'Simple & easy distinguish in a ...', icon: 'flaticon-data' },
    { title: 'Ma', description: 'Any right to find fault with ...', icon: 'flaticon-brain' },
    { title: 'Cupport', description: 'Beguiled & demoralized by the charms ...', icon: 'flaticon-vr' }
    // Ajoutez ici plus de cartes si nécessaire
  ];

  // Fonction pour passer aux diapositives suivantes
  const showNextSlides = () => {
    setCurrentIndex(prevIndex => (prevIndex + 3) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(showNextSlides, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.slice(currentIndex, currentIndex + 3).map((slide, index) => (
        <div className="slide" key={index}>
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
          <div className="icon-box"><i className={`icon ${slide.icon}`}></i></div>
          {/* Ajoutez d'autres éléments de carte ici si nécessaire */}
        </div>
      ))}
    </div>
  );
}

export default Test;
