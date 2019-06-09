import { type as setError } from "../actions/setError";
import { type as clearError } from "../actions/clearError";
const initialState = {
  error: null
};
function ErrorReducer(state = initialState, { type, payload }) {
  switch (type) {
    case setError:
      return {
        error: payload
      };
    case clearError:
      return {
        error: null
      };
    default:
      return state;
  }
}
export default ErrorReducer;
