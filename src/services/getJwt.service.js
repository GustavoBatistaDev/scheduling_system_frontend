export const getJwtService = () => {
    const token = localStorage.getItem('jwt');
    return token;
};