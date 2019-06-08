import React from "react";

function Article(props) {
  let options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short"
  };
  let pub_date = new Date(props.article.pub_date);
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-2 thumbnail">
          {props.article.multimedia[17] && (
            <img
              src={`https://www.nytimes.com/${
                props.article.multimedia[17].url
              }`}
              className="img-thumbnail"
              alt="Article's Thumbnail"
            />
          )}
        </div>
        <div className="col-10">
          <div className="row">
            <a
              href={props.article.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>{props.article.headline.main}</h4>
            </a>
          </div>
          <div className="row">
            <p className="text-justify">{props.article.snippet}</p>
          </div>
          <div className="row">
            <strong>Source: </strong>
            {props.article.source}
          </div>
          <div className="row">
            <strong>Published: </strong>
            {pub_date.toLocaleDateString("en-US", options)}
          </div>
          <div className="row">
            <ul className="keywordUl">
              <img src="tag.svg" className="tagIcon" alt="tag icon" />
              {props.article.keywords &&
                props.article.keywords.map(keyword => (
                  <li
                    key={keyword.rank}
                    className="mr-3 keywordLi"
                    onClick={props.handleKeywordArticle}
                    name={keyword.value}
                  >
                    {keyword.value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
