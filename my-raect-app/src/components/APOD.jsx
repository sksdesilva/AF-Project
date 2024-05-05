import React, { useEffect, useState } from 'react';
import { fetchAPOD } from '../api/CommonAPI';

const APOD = () => {
  const [apodData, setAPODData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAPOD();
      setAPODData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="apod">
      {apodData && (
        <>
          <h2 className="apod-title">{apodData.title}</h2>

          {/* Responsive Image Handling with Max-Width Constraint */}
          <picture>
            <source
              srcSet={`${apodData.url} 320w, ${apodData.hdurl} 1024w`}
              media="(max-width: 768px)" // Target screens up to 768px wide
            />
            <img
              className="mainImg1"
              src={apodData.hdurl}
              alt={apodData.title}
              style={{ maxWidth: '100%' }} // Constrain image width to container
            />
          </picture>

          <p className="description">{apodData.explanation}</p>
        </>
      )}
    </div>
  );
};

export default APOD;
