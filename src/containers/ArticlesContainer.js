import React, { Component } from "react";
import ArticlesLayout from "../components/ArticlesLayout";
import "../components/styles/Article.css";
export class ArticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: undefined,
      hits: undefined
    };
  }
  //ADD A LISTENER TO HANDLE THE SCROLL ON SCREEN
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  //REMOVE THE SCROLL LISTENER
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  //SET THE INITIAL STATE
  componentWillMount = () => {
    this.setState({
      articlesList: this.props.articlesList,
      hits: this.props.hits
    });
  };
  //LOAD NEW DATA, THE NEXT 10
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.articlesList !== this.props.articlesList) {
      this.setState({
        articlesList: this.props.articlesList,
        hits: this.props.hits
      });
    }
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
        articlesList={this.state.articlesList}
        hits={this.state.hits}
        handleKeywordArticle={this.props.handleKeywordArticle}
        handleGetMore={this.props.handleGetMore}
        topFunction={this.topFunction}
      />
    );
  }
}

export default ArticlesContainer;
