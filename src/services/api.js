import axios from 'axios';

export const getApps = async (page = 1) => {
  try {
    const response = await axios.get(`https://pluga.co/ferramentas_search.json?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
