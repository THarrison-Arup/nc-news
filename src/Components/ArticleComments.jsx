import React from 'react';
import ArticleCommentsForm from './ArticleCommentsForm';
import ArticleCommentsResponse from './ArticleCommentsResponse';

const ArticleCommentAdder = (props) => {
  
  const {article} = props;
  
  return (
    <div className="Article-Comments">
      <ArticleCommentsForm article={article}/>
      <ArticleCommentsResponse />
    </div>
  );
};

export default ArticleCommentAdder;