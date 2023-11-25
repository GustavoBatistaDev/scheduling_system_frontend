export const setJwtToLocalStorage = (jwt) => {
    localStorage.setItem("jwt", jwt);
};

export const removeJwtToLocalStorage= () => {
    localStorage.removeItem('jwt');
    location.reload();
};
