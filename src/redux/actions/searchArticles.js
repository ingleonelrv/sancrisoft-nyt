export const type = "searchArticles";

const searchArticles = result => {
  return {
    type,
    payload: result
  };
};
export default searchArticles;
