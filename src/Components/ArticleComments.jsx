import React from 'react';
import ArticleCommentsForm from './ArticleCommentsForm';
import ArticleCommentsResponse from './ArticleCommentsResponse';

const ArticleCommentAdder = () => {
  return (
    <div className="Article-Comments">
      <ArticleCommentsForm />
      <ArticleCommentsResponse />
    </div>
  );
};

export default ArticleCommentAdder;