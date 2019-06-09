export const type = "setPage";

const setPage = page => {
  return {
    type,
    payload: page
  };
};
export default setPage;
