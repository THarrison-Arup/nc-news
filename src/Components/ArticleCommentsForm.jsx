import React from 'react';

const ArticleCommentsForm = (props) => {

  const {article, commentInput, submitComment, clearCommentInput, commentValues} = props;
  const {commentAuthor, commentBody} = commentValues;

  return (
    <form className="Article-Comments-Form">
      <h3>Submit New Comment</h3>
      <input
        id="Article-Comments-Form-Author"
        type="text"
        name="commentAuthor"
        value={commentAuthor}
        placeholder="Comment Author..."
        onChange={event => commentInput(event)}
        >
      </input>
      <input
        id="Article-Comments-Form-Article_Id"
        type="text"
        name="commentArticleId"
        value={article.article_id}
      >
      </input>
      <textarea
        id="Article-Comments-Form-Body"
        type="text"
        name="commentBody"
        value={commentBody}
        placeholder="Comment Body..."
        onChange={event => commentInput(event)}
        >
      </textarea>
      <button
        id="Article-Comments-Form-Submit"
        type="submit"
        onClick={submitComment}
      > Submit Comment
      </button>
      <button
        id="Article-Comments-Form-Clear"
        type="submit"
        onClick={clearCommentInput}
      > Clear Inputs
      </button>
    </form>
  );
};

export default ArticleCommentsForm;