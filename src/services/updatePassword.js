
import axios from 'axios';

// eslint-disable-next-line no-undef
const apiUrlbase = `${import.meta.env.VITE_SERVER_EXPRESS_PROTOCOL}://${import.meta.env.VITE_SERVER_EXPRESS_HOST}:${import.meta.env.VITE_SERVER_EXPRESS_PORT}`;

const endpoint = '/user/recover'

const updatePassword = async (postData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(apiUrlbase + endpoint, postData);
    return response;
    
  } catch (error) {
    throw error;
  }
};

export { updatePassword };
