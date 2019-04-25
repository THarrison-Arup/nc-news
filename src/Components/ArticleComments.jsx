import React from 'react';
import ArticleCommentsForm from './ArticleCommentsForm';
import ArticleCommentsResponse from './ArticleCommentsResponse';

const ArticleCommentAdder = (props) => {
  
  const {article, submitComment, clearCommentInput} = props;
  
  return (
    <div className="Article-Comments">
      <ArticleCommentsForm 
        article={article}
        submitComment={submitComment} 
        clearCommentInput={clearCommentInput}
      />
      <ArticleCommentsResponse />
    </div>
  );
};

export default ArticleCommentAdder;