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
