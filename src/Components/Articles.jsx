import React from "react";
import "./css/Main.css";

const Articles = ({ articles, handleArticleSearchSubmit, handleArticleSearchInput, handleArticleClearSubmit, searchCriteria }) => {
  const articleList = articles;
  console.log(articleList);
  const {id, author, title} = searchCriteria;
  return (
    <main className="Main-Articles">
      <form className="Articles-Search-Form">
        <h2>Use the search criteria below...</h2>
        <input
          id="Articles-Search-ID"
          name="id"
          type="text"
          value={id}
          placeholder="Article ID..."
          onChange={event => handleArticleSearchInput(event)}
        />
        <input
          id="Articles-Search-Title"
          name="title"
          type="text"
          value={title}
          placeholder="Article Title..."
          onChange={event => handleArticleSearchInput(event)}
        />
        <input
          id="Articles-Search-Author"
          name="author"
          type="text"
          value={author}
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
          onClick={event => handleArticleClearSubmit(event)}
        >
          Clear Search
        </button>
        <ul className="Articles-Search-Results">
          <h3>Search Results</h3>
        </ul>
      </form>
      <form className="Articles-Add-Form">
        <h2>Add an Article!</h2>
        <input id="Articles-Add-Title" type="text"/>
        <input id="Articles-Add-Author" type="text"/>
        <input id="Articles-Add-Topic" type="text"/>
        <input id="Articles-Add-Author" type="text"/>
      </form>
    </main>
  );
};

export default Articles;
