import React from "react";

const ArticlesSearchForm = ({
  handleArticleSearchSubmit,
  handleArticleSearchInput,
  handleArticleSearchClear,
  searchCriteria
}) => {
  const { searchauthor, searchid, searchtitle } = searchCriteria;

  return (
    <form className="Articles-Search-Form">
      <h3>Use the search criteria below...</h3>
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
    </form>
  );
};

export default ArticlesSearchForm;
