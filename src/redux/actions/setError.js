export const type = "setError";

const setError = error => {
  return {
    type,
    payload: error
  };
};
export default setError;
