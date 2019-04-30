import React from "react";

const ArticlesSearchForm = ({
  handleArticleSearchSubmit,
  handleArticleSearchInput,
  handleArticleSearchClearInputs,
  handleArticleSearchClearResults,
  searchCriteria
}) => {
  const { searchauthor, searchtopic, searchtitle } = searchCriteria;

  return (
    <form className="Articles-Search-Form">
      <h3>Use the search criteria below...</h3>
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
      <input
        id="Articles-Search-Topic"
        name="searchtopic"
        type="text"
        value={searchtopic}
        placeholder="Article Topic..."
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
        id="Articles-Search-Clear-Inputs"
        type="submit"
        onClick={event => handleArticleSearchClearInputs(event)}
      >
        Clear Search
      </button>
      <button
        id="Articles-Search-Clear-Results"
        type="subtmit"
        onClick={event => handleArticleSearchClearResults(event)}
      >
        Clear Results
      </button>
    </form>
  );
};

export default ArticlesSearchForm;
