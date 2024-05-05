import React, { useState } from 'react';
import { fetchCuriosityPhotos, extractImageUrls } from '../api/CommonAPI';
import '../styles/Home.css';

function Rover() {
  // State to store the user-entered date
  const [userInputDate, setUserInputDate] = useState('');

  // State to store the image URLs
  const [imageUrls, setImageUrls] = useState([]);

  // Helper function to display an error message (optional)
  const showErrorMessage = (message) => {
    console.error(message);
    // You can also display the error message to the user (e.g., using a toast notification)
  };

  // Fetch images when the user submits the form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!userInputDate.trim()) {
      showErrorMessage('Please enter a valid date.');
      return; // Exit early if no date is entered
    }

    const formattedDate = userInputDate.slice(0, 10); // Format date for API call

    try {
      const responseData = await fetchCuriosityPhotos(formattedDate);
      if (responseData) {
        const extractedUrls = extractImageUrls(responseData);
        setImageUrls(extractedUrls);
      } else {
        showErrorMessage('An error occurred while fetching images.');
      }
    } catch (error) {
      showErrorMessage('An error occurred:', error);
    }
  };

  return (
    <div className="rover-container">
      <h1>Curiosity Rover Photos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Enter Earth Date (YYYY-MM-DD):</label>
        <input
          type="date"
          id="date"
          value={userInputDate}
          onChange={(event) => setUserInputDate(event.target.value)}
          min="2015-06-04" // Set minimum date (optional)
        />
        <button type="submit">Search</button>
      </form>
      {imageUrls.length > 0 ? (
        <div className="image-grid">
          {/* Display images in a grid */}
          {imageUrls.slice(0, 6).map((imageUrl, index) => (
            <div className="image-wrapper" key={index}>
              <img
                className="image-item"
                src={imageUrl}
                alt={`Curiosity Rover Photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Enter a date and click search to see photos.</p>
      )}
    </div>
  );
}

export default Rover;
