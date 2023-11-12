export const setJwtToCookie = (jwt) => {
    localStorage.setItem("jwt", jwt);
};