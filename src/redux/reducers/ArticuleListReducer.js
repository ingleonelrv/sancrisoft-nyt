import { type as searchArticles } from "../actions/searchArticles";
import { type as clearArticles } from "../actions/clearArticles";
const initialState = {
  articlesList: [],
  hits: 0
};
function ArticuleListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case searchArticles:
      return {
        articlesList: state.articlesList.concat(payload.docs),
        hits: payload.meta.hits
      };
    case clearArticles:
      return {
        articlesList: [],
        hits: 0
      };
    default:
      return state;
  }
}
export default ArticuleListReducer;
