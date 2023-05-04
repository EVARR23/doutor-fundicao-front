import axios from 'axios';

const getAllClassifications = async () => {
  try {
    const response = await axios.get('http://192.168.0.247/api/classificacao');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getAllClassifications;
