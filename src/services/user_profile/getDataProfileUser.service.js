import axios from 'axios';
import { getJwtService } from '../getJwt.service';

// eslint-disable-next-line no-undef
const apiUrlbase = `${import.meta.env.VITE_SERVER_EXPRESS_PROTOCOL}://${import.meta.env.VITE_SERVER_EXPRESS_HOST}:${import.meta.env.VITE_SERVER_EXPRESS_PORT}`;

const endpoint = '/profile';

const getDataProfileUser = async () => {
  try {
    const response = await axios.get(apiUrlbase + endpoint, {
      headers: {
        'Authorization': `Bearer ${getJwtService()}`
      },
    });

    return response;
  } catch (error) {
    console.log('eriri')
    console.log(error)
  }
};

export { getDataProfileUser };
