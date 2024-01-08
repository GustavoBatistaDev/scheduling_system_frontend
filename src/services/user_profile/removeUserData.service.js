export const removeDataUserFromLocalStorage= () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('photoUser');
    location.reload();
};
