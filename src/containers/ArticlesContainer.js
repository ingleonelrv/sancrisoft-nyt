import React, { Component } from "react";
import { connect } from "react-redux";
import ArticlesLayout from "../components/ArticlesLayout";
import "../components/styles/Article.css";
export class ArticlesContainer extends Component {
  //ADD A LISTENER TO HANDLE THE SCROLL ON SCREEN
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  //REMOVE THE SCROLL LISTENER
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  //HANDLE THE SCROLL POSITION
  handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  };
  //MOVE TO TOP
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  render() {
    return (
      <ArticlesLayout
        articlesList={this.props.articlesList}
        hits={this.props.hits}
        handleKeywordArticle={this.props.handleKeywordArticle}
        handleGetMore={this.props.handleGetMore}
        topFunction={this.topFunction}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    articlesList: state.ArticuleListReducer.articlesList,
    hits: state.ArticuleListReducer.hits
  };
}
export default connect(mapStateToProps)(ArticlesContainer);
