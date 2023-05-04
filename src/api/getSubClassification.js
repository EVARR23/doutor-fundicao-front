import axios from 'axios';

export const getSubClassifications = async () => {
  try {
    const response = await axios.get(`http://192.168.0.247:8080/api/subclassificacao`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
