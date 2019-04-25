import React from 'react';

const ArticleCommentsForm = (props) => {

  const {article} = props;

  return (
    <form className="Article-Comments-Form">
      <h3>Submit New Comment</h3>
      <input
        id="Article-Comments-Form-Author"
        type="text"
        placeholder="Comment Author..."
        >
      </input>
      <input
        id="Article-Comments-Form-Article_Id"
        type="number"
        value={article.article_id}
      >
      </input>
      <textarea
        id="Article-Comments-Form-Body"
        type="text"
        placeholder="Comment Body..."
        >
      </textarea>
      <button
        id="Article-Comments-Form-Submit"
        type="submit"
        onClick=""
      > Submit Comment
      </button>
      <button
        id="Article-Comments-Form-Clear"
        type="submit"
        onClick=""
      > Clear Inputs
      </button>
    </form>
  );
};

export default ArticleCommentsForm;