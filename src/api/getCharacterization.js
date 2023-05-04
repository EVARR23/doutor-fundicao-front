import axios from 'axios';

export const getCharacterization = async (id) => {
  try {
    const response = await axios.get(`http://192.168.0.247:8080/api/caracterizacao`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
