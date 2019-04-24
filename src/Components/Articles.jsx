import React from "react";
import "./css/Main.css";

const Articles = ({
  articles,
  handleArticleSearchSubmit,
  handleArticleSearchInput,
  handleArticleSearchClear,
  searchCriteria,
  handleArticleAddSubmit,
  handleArticleAddClear,
  handleArticleAddInput,
  addCriteria,
  articleData
}) => {
  const articleList = articles;
  const { searchid, searchauthor, searchtitle } = searchCriteria;
  const { addtitle, addauthor, addtopic } = addCriteria;
  const { article } = articleData;
  console.log(articleData, 'articleData')

  return (
    <main className="Main-Articles">
      <form className="Articles-Search-Form">
        <h2>Use the search criteria below...</h2>
        <input
          id="Articles-Search-ID"
          name="searchid"
          type="text"
          value={searchid}
          placeholder="Article ID..."
          onChange={event => handleArticleSearchInput(event)}
        />
        <input
          id="Articles-Search-Title"
          name="searchtitle"
          type="text"
          value={searchtitle}
          placeholder="Article Title..."
          onChange={event => handleArticleSearchInput(event)}
        />
        <input
          id="Articles-Search-Author"
          name="searchauthor"
          type="text"
          value={searchauthor}
          placeholder="Article Author..."
          onChange={event => handleArticleSearchInput(event)}
        />
        <button
          id="Articles-Search-Submit"
          type="submit"
          onClick={event => handleArticleSearchSubmit(event)}
        >
          Search
        </button>
        <button
          id="Articles-Search-Clear"
          type="submit"
          onClick={event => handleArticleSearchClear(event)}
        >
          Clear Search
        </button>
        <ul className="Articles-Search-Results">
          <h3>Search Results</h3>
          <li>{article ? article.title : ""}</li>
        </ul>
      </form>
      <form className="Articles-Add-Form">
        <h2>Add an Article!</h2>
        <input
          id="Articles-Add-Title"
          type="text"
          name="addtitle"
          value={addtitle}
          placeholder="Article Title..."
          onChange={event => handleArticleAddInput(event)}
        />
        <input
          id="Articles-Add-Author"
          type="text"
          name="addauthor"
          value={addauthor}
          placeholder="Article Author..."
          onChange={event => handleArticleAddInput(event)}
        />
        <input
          id="Articles-Add-Topic"
          type="text"
          name="addtopic"
          value={addtopic}
          placeholder="Article Topic..."
          onChange={event => handleArticleAddInput(event)}
        />
        <button
          id="Articles-Add-Submit"
          type="submit"
          onClick={event => handleArticleAddSubmit(event)}
        >
          Add Article
        </button>
        <button
          id="Articles-Add-Clear"
          type="submit"
          onClick={event => handleArticleAddClear(event)}
        >
          Clear Article
        </button>
        <ul className="Articles-Add-Results">
          <h3>Server Response Window</h3>
        </ul>
      </form>
    </main>
  );
};

export default Articles;
