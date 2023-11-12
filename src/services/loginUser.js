
import axios from 'axios';


// eslint-disable-next-line no-undef
const apiUrlbase = `${import.meta.env.VITE_SERVER_EXPRESS_PROTOCOL}://${import.meta.env.VITE_SERVER_EXPRESS_HOST}:${import.meta.env.VITE_SERVER_EXPRESS_PORT}`;



const endpoint = '/user/login'


const loginrUser = async (postData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(apiUrlbase + endpoint, postData);
    return response.data;
    
  } catch (error) {
    throw error;
  }
};

export { loginrUser };
