import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchContainer from "./containers/SearchContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchContainer />
      </div>
    </Provider>
  );
}

export default App;
