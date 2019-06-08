import React from "react";
import "./styles/Loader.css";
function ErrorPage(props) {
  return (
    <div className="LoadingPage">
      <div className="alert alert-danger" role="alert">
        {props.error.message}
      </div>
    </div>
  );
}

export default ErrorPage;
