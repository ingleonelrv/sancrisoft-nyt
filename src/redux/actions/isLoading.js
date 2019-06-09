export const type = "isLoading";

const isLoading = flag => {
  return {
    type,
    payload: flag
  };
};
export default isLoading;
