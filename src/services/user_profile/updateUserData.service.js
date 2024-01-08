import axios from 'axios';
import { getJwtService } from '../getJwt.service';
import { toast } from 'react-toastify';

// eslint-disable-next-line no-undef
const apiUrlbase = `${import.meta.env.VITE_SERVER_EXPRESS_PROTOCOL}://${import.meta.env.VITE_SERVER_EXPRESS_HOST}:${import.meta.env.VITE_SERVER_EXPRESS_PORT}`;

const endpoint = '/profile';

const updateProfileUser = async (profileData) => {
  try {
    const response = await axios.patch(apiUrlbase + endpoint, profileData, {
      headers: {
        'Authorization': `Bearer ${getJwtService()}`,
        'Content-Type': 'application/json', // Especifica que estamos enviando dados no formato JSON
      },
    });

   
    return response.data;
  } catch (error) {

    toast.error(error.response.data.message);
    

    throw new Error('Failed to update profile data');
  }
};

export { updateProfileUser };
