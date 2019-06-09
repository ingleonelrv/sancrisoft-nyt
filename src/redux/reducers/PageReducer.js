import { type as setPage } from "../actions/setPage";
import { type as clearPage } from "../actions/clearPage";
const initialState = {
  page: 0
};
function PageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case setPage:
      return {
        page: payload + 1
      };
    case clearPage:
      return {
        page: 0
      };
    default:
      return state;
  }
}
export default PageReducer;
