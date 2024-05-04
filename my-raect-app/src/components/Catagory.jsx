import React, { useState } from 'react';
import '../styles/Category.css';

function Category() {
  const [highlighted, setHighlighted] = useState(null);

  const handleMouseEnter = (id) => {
    setHighlighted(id);
  };

  const handleMouseLeave = () => {
    setHighlighted(null);
  };

  return (
    <div className="container" style={{ marginLeft: '120px' }}>
      <div className="row">
        <div
          className="col"
          style={{
            width: '50%',
            height: '60vh',
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          <img
            src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          />
          {highlighted === 1 && (
            <div className="overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '10px' }}>Earth resolution</div>
          )}
        </div>
        <div
          className="col"
          style={{
            width: '50%',
            height: '60vh',
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          <img
            src="http://apod.nasa.gov/apod/image/1310/velafilaments_jadescope_960.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          />
          {highlighted === 2 && (
            <div className="overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '10px' }}>Earth resolution</div>
          )}
        </div>
      </div>
      <div className="row">
        <div
          className="col"
          style={{
            marginTop: '10px',
            width: '50%',
            height: '60vh',
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          <img
            src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FLB_761645828EDR_F1060660FHAZ00302M_.JPG"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          />
          {highlighted === 3 && (
            <div className="overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '10px' }}>img 3</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
