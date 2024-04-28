import React from 'react';

function Category() {
  return (
<div className="container" style={{ marginLeft: '120px' }}>
      <div className="row">
        <div className="col" style={{ width: '50%', height: '50vh', backgroundColor: 'blue' }}>
          {/* Placeholder for Image 1 */}
        </div>
        <div className="col" style={{ width: '50%', height: '50vh', backgroundColor: 'green' }}>
          {/* Placeholder for Image 2 */}
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ width: '100%', height: '50vh', backgroundColor: 'red' }}>
          {/* Placeholder for Image 3 */}
        </div>
      </div>
    </div>
  );
}

export default Category;
