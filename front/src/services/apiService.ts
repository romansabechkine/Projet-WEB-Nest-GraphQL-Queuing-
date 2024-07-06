import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
console.log("env vars:", process.env);
console.log("API_URL:", API_URL);

export const healthCheck = async () => {
  try {
    const response = await axios.get(`${API_URL}/health-check`);
    return response.data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
};
