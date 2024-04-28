// App.js
import React from 'react';
import './styles/Home.css';
import APOD from './components/APOD';
import Header from './components/Header';
import Catagory from './components/Catagory';



function App() {
  return (
    <div className="container">
      <Header/>
      <div className="mainImg">
      <APOD/>
      <Catagory/>
      </div>
      <div className="row" style={{ marginTop: '100px'}}>
      <div className="col image-container">
          <img src="https://apod.nasa.gov/apod/image/2404/20240408h14.jpg" alt="NASA Image" className="img-fluid" />
         
        </div>
       
      </div>
    </div>
  );
}




export default App;
