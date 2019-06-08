import React from "react";
import Article from "./Article";
function ArticlesLayout(props) {
  return (
    <div className="container">
      <ul className="list-unstyled">
        {props.articlesList.map(article => {
          return (
            <li key={article._id}>
              <Article
                article={article}
                handleKeywordArticle={props.handleKeywordArticle}
              />
            </li>
          );
        })}
      </ul>
      {props.articlesList.length < props.hits && (
        <div className="col mb-3">
          <div className="row">
            <label>
              Displaying {props.articlesList.length} results of {props.hits}
            </label>
          </div>
          <div className="row">
            <button className="btn btn-primary" onClick={props.handleGetMore}>
              Get More News
            </button>
          </div>
        </div>
      )}
      <button onClick={props.topFunction} id="topBtn" title="Go to top">
        Top
      </button>
    </div>
  );
}
export default ArticlesLayout;
