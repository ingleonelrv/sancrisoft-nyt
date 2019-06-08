import React, { Component } from "react";
import API from "../API";
import Search from "../components/Search";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import ArticlesContainer from "./ArticlesContainer";
export class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      data: [],
      hits: 0,
      page: 0,
      searchText: "",
      selectedType: "News",
      type_of_material: [
        "Addendum",
        "An Analysis",
        "An Appraisal",
        "Article",
        "Banner",
        "Biography",
        "Birth Notice",
        "Blog",
        "Brief",
        "Caption",
        "Chronology",
        "Column",
        "Correction",
        "Economic Analysis",
        "Editorial",
        "Editorial Cartoon",
        "Editors Note",
        "First Chapter",
        "Front Page",
        "Glossary",
        "Interactive Feature",
        "Interactive Graphic",
        "Interview",
        "Letter",
        "List",
        "Marriage Announcement",
        "Military Analysis",
        "News",
        "News Analysis",
        "Newsletter",
        "Obituary",
        "Obituary (Obit)",
        "Op-Ed",
        "Paid Death Notice",
        "Postscript",
        "Premium",
        "Question",
        "Quote",
        "Recipe",
        "Review",
        "Schedule",
        "SectionFront",
        "Series",
        "Slideshow",
        "Special Report",
        "Statistics",
        "Summary",
        "Text",
        "Video",
        "Web Log"
      ]
    };
  }
  //CALL TO API AND GET DATA
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    const { searchText, selectedType, page } = this.state;
    try {
      const result = await API.getArticles(selectedType, searchText, page);
      document.getElementById("searchArea").className = "searchAreaContent";
      document.getElementById("searchForm").className += " searchFormContent";
      document.getElementById("logo").classList.add("logoHide");
      document.getElementById("searchForm").style.backgroundColor =
        "rgba(0,0,0,0)";
      this.setState({
        loading: false,
        data: [].concat(this.state.data, result.response.docs),
        hits: result.response.meta.hits,
        page: this.state.page + 1
      });
    } catch (error) {
      this.setState({ loading: false, error });
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
    this.setState({ page: 0, data: [] }, () => {
      this.fetchData();
    });
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
          types={this.state.type_of_material}
          handleChangeInput={this.handleChangeInput}
          handleChangeSelect={this.handleChangeSelect}
          handleSearch={this.handleSearch}
        />
        {this.state.loading && <LoadingPage />}
        {this.state.error && <ErrorPage error={this.state.error} />}
        {this.state.data.length > 0 && (
          <ArticlesContainer
            hits={this.state.hits}
            articlesList={this.state.data}
            handleGetMore={() => this.fetchData()}
            handleKeywordArticle={this.handleKeywordArticle}
          />
        )}
      </React.Fragment>
    );
  }
}

export default SearchContainer;
