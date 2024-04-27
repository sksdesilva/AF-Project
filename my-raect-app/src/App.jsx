// App.js
import React from 'react';
import './styles/Home.css';



function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ marginLeft: '50px',padding: '100px', background: 'red',  width: '600px' }}>
          1
        </div>
        <div className="col">
          <div className="row" style={{ marginLeft: '10px' , padding: '100px', background: 'blue' ,width: '400px' }}>
            2
          </div>
          <div className="row" style={{marginLeft: '10px' ,marginTop: '10px' , padding: '100px', background: 'gray' ,  width: '300px'}}>
            3
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
