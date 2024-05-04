// api/nasaApi.js
const API_KEY = 'DEMO_KEY'; 

export const fetchAPOD = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from NASA APOD API');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};

export const fetchCuriosityPhotos = async (earthDate) => {
  const apiKey = 'DEMO_KEY'; // Replace 'DEMO_KEY' with your actual API key
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=Ngkaoj4X0w7XUsBhd9O72Pcc4ouMPxTeW5AhWL1s`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch Curiosity photos');
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching Curiosity photos:', error.message);
    return null;
  }
};

export const extractImageUrls = (responseData) => {
  // Check if the response contains the 'photos' array
  if (responseData && responseData.photos && Array.isArray(responseData.photos)) {
    // Initialize an array to store the image URLs
    const imageUrls = [];

    // Iterate over each photo object in the 'photos' array
    responseData.photos.forEach(photo => {
      // Check if the photo object has the 'img_src' property
      if (photo.img_src) {
        // Push the 'img_src' value into the imageUrls array
        imageUrls.push(photo.img_src);
      }
    });

    // Now the 'imageUrls' array contains all the image URLs
    return imageUrls;
  } else {
    console.log('Invalid response format or no photos found.');
    return null;
  }
};

// Example usage
const earthDate = '2015-06-03'; // Replace with the desired date
fetchCuriosityPhotos(earthDate)
  .then(responseData => {
    if (responseData) {
      const imageUrls = extractImageUrls(responseData);
      console.log('Image URLs:', imageUrls);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });