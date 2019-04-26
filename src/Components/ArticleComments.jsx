import React from 'react';
import ArticleCommentsForm from './ArticleCommentsForm';
import ArticleCommentsResponse from './ArticleCommentsResponse';

const ArticleCommentAdder = (props) => {
  
  const {article, commentInput, submitComment, clearCommentInput, commentValues, commentResponse} = props;
  
  return (
    <div className="Article-Comments">
      <ArticleCommentsForm 
        article={article}
        commentInput={commentInput}
        submitComment={submitComment} 
        clearCommentInput={clearCommentInput}
        commentValues={commentValues}
        commentResponse={commentResponse}
      />
      <ArticleCommentsResponse />
    </div>
  );
};

export default ArticleCommentAdder;