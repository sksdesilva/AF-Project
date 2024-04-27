// App.js
import React from 'react';
import './styles/Home.css';
import APOD from './components/APOD';



function App() {
  return (
    <div className="container">
      <div className="row">
      <div className="col image-container">
          <img src="https://apod.nasa.gov/apod/image/2404/20240408h14.jpg" alt="NASA Image" className="img-fluid" />
        </div>
        <div className="col">
          <div className="row" style={{ marginLeft: '10px' , padding: '100px', background: 'blue' ,width: '400px' }}>
            2
          </div>
          <div className="row" style={{marginLeft: '10px' ,marginTop: '10px' , padding: '100px', background: 'gray' ,  width: '400px'}}>
            3
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col" style={{ marginLeft: '100px',marginTop: '10px',padding: '100px', background: 'red',  width: '700px' }}>
          4
        </div>
      </div>
<APOD/>
    </div>
  );
}




export default App;
