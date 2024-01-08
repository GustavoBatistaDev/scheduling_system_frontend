import axios from 'axios';
import { getJwtService } from '../getJwt.service';

const apiUrlbase = `${import.meta.env.VITE_SERVER_EXPRESS_PROTOCOL}://${import.meta.env.VITE_SERVER_EXPRESS_HOST}:${import.meta.env.VITE_SERVER_EXPRESS_PORT}`;
const endpoint = '/photo';

const updateUserPhotoService = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file); // 'photo' é o nome do campo no servidor

    const response = await axios.post(apiUrlbase + endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
         'Authorization': `Bearer ${getJwtService()}`,
      },
    });

    return response;
  } catch (error) {
    console.error('Erro ao enviar a imagem:', error);
    throw error;
  }
};

export { updateUserPhotoService };
