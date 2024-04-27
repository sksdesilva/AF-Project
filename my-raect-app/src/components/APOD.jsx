// components/APOD.js
import React, { useEffect, useState } from 'react';
import { fetchAPOD } from '../api/CommonAPI';
import '../styles/APOD.css';

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
    <div className='apod'>
      {apodData && (
        <>
          <h2>{apodData.title}</h2>
          <img className='mainImg1' src={apodData.hdurl} alt={apodData.title} />
          <p className="description">{apodData.explanation}</p>
        </>
      )}
    </div>
  );
};

export default APOD;
