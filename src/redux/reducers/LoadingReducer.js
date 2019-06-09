import { type as isLoading } from "../actions/isLoading";
const initialState = {
  loading: false
};
function LoadingReducer(state = initialState, { type, payload }) {
  switch (type) {
    case isLoading:
      return { loading: payload };
    default:
      return state;
  }
}
export default LoadingReducer;
