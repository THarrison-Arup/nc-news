import React from "react";

const ArticlesAdderForm = ({}) => {
  return (
    <form className="Articles-Add-Form">
      <h2>Add an Article!</h2>
      <input
        id="Articles-Add-Title"
        type="text"
        name="addtitle"
        // value={addtitle}
        // placeholder="Article Title..."
        // onChange={event => handleArticleAddInput(event)}
      />
      <input
        id="Articles-Add-Author"
        type="text"
        name="addauthor"
        // value={addauthor}
        // placeholder="Article Author..."
        // onChange={event => handleArticleAddInput(event)}
      />
      <input
        id="Articles-Add-Topic"
        type="text"
        name="addtopic"
        // value={addtopic}
        // placeholder="Article Topic..."
        // onChange={event => handleArticleAddInput(event)}
      />
      <button
        id="Articles-Add-Submit"
        type="submit"
        // onClick={event => handleArticleAddSubmit(event)}
      >
        Add Article
      </button>
      <button
        id="Articles-Add-Clear"
        type="submit"
        // onClick={event => handleArticleAddClear(event)}
      >
        Clear Article
      </button>
    </form>
  );
};

export default ArticlesAdderForm;
