// import { BASE_API } from "../utils/apikeys.json";
const API_KEY = "ukRhZ6BIeaOPolw779Sq4ss1qjmqokJX";
const BASE_API = `https://api.nytimes.com/svc/search/v2`;

class API {
  async getArticles(typeMaterial, searchText, page) {
    const query = await fetch(`${BASE_API}/articlesearch.json?fq=type_of_material:%22${typeMaterial}%22&q=${searchText}&page=${page}&api-key=${API_KEY}
    `);
    const result = await query.json();
    if (!result.response.docs.length) {
      throw new Error("No results found!");
    }
    return result;
  }
}
export default new API();
