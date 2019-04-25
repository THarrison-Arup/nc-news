import React from 'react';
import ArticleCommentsForm from './ArticleCommentsForm';
import ArticleCommentsResponse from './ArticleCommentsResponse';

const ArticleCommentAdder = (props) => {
  
  const {article, commentInput, submitComment, clearCommentInput, commentValues} = props;
  
  return (
    <div className="Article-Comments">
      <ArticleCommentsForm 
        article={article}
        commentInput={commentInput}
        submitComment={submitComment} 
        clearCommentInput={clearCommentInput}
        commentValues={commentValues}
      />
      <ArticleCommentsResponse />
    </div>
  );
};

export default ArticleCommentAdder;