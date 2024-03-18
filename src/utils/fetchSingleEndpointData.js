const baseUrl = 'https://swapi.dev/api';

export const fetchSingleEndpointData = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
