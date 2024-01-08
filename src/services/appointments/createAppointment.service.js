
import axios from 'axios';
import { getJwtService } from '../getJwt.service';


// eslint-disable-next-line no-undef
const apiUrlbase = `${import.meta.env.VITE_SERVER_EXPRESS_PROTOCOL}://${import.meta.env.VITE_SERVER_EXPRESS_HOST}:${import.meta.env.VITE_SERVER_EXPRESS_PORT}`;

const endpoint = '/appointments'

const registerAppointment = async (postData) => {
    console.log(postData);

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(apiUrlbase + endpoint, postData, {
      headers: {
        'Authorization': `Bearer ${getJwtService()}`
      },
    });
    
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { registerAppointment };
