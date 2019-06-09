import React, { Component } from "react";
import { connect } from "react-redux";
//REDUX ACTIONS
import isLoading from "../redux/actions/isLoading";
import searchArticles from "../redux/actions/searchArticles";
import clearArticles from "../redux/actions/clearArticles";
import setPage from "../redux/actions/setPage";
import clearPage from "../redux/actions/clearPage";
import setError from "../redux/actions/setError";
import clearError from "../redux/actions/clearError";

import API from "../API";

import Search from "../components/Search";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import ArticlesContainer from "./ArticlesContainer";

export class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      selectedType: "News"
    };
  }
  //CALL TO API AND GET DATA
  fetchData = async () => {
    this.props.isLoading(true);
    this.props.clearError();
    // this.setState({ loading: true, error: null });
    const { searchText, selectedType } = this.state;
    try {
      const result = await API.getArticles(
        selectedType,
        searchText,
        this.props.page
      );
      document.getElementById("searchArea").className = "searchAreaContent";
      document.getElementById("searchForm").className += " searchFormContent";
      document.getElementById("logo").classList.add("logoHide");
      document.getElementById("searchForm").style.backgroundColor =
        "rgba(0,0,0,0)";

      this.props.searchArticles(result.response);
      this.props.isLoading(false);
      this.props.setPage(this.props.page);
    } catch (error) {
      this.props.isLoading(false);
      this.props.setError(error);
    }
  };
  //GET THE WRITED
  handleChangeInput = e => {
    this.setState({ searchText: e.target.value });
  };
  //GET THE SELECTED TYPE OF MATERIAL
  handleChangeSelect = e => {
    this.setState({ selectedType: e.target.value });
  };
  //BUTTON SEARCH HANDLE
  handleSearch = () => {
    this.props.clearPage();
    this.props.clearArticles();
    this.fetchData();
  };
  //HANDLE THE KEYWORD SELECTED FOR A NEW SEARCH
  handleKeywordArticle = e => {
    this.setState({ searchText: e.target.innerText }, () => {
      this.handleSearch();
    });
  };
  render() {
    return (
      <React.Fragment>
        <Search
          searchText={this.state.searchText}
          selectedType={this.state.selectedType}
          types={this.props.type_of_material}
          handleChangeInput={this.handleChangeInput}
          handleChangeSelect={this.handleChangeSelect}
          handleSearch={this.handleSearch}
        />
        {this.props.loading && <LoadingPage />}
        {this.props.error && <ErrorPage error={this.props.error} />}
        {this.props.articlesList.length > 0 && (
          <ArticlesContainer
            handleGetMore={() => this.fetchData()}
            handleKeywordArticle={this.handleKeywordArticle}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    type_of_material: state.TypeMaterialReducer,
    articlesList: state.ArticuleListReducer.articlesList,
    loading: state.LoadingReducer.loading,
    page: state.PageReducer.page,
    error: state.ErrorReducer.error
  };
};
const mapDispatchToProps = {
  isLoading,
  searchArticles,
  clearArticles,
  setPage,
  clearPage,
  setError,
  clearError
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
