import React from 'react';
import ArticleInformationText from './ArticleInformationText';
import ArticleInformationComments from './ArticleInformationComments';

const ArticleInformation = (props) => {
  
  const { article, comments, handleDelete } = props

  return (
    <div className="Article-Information">
      <ArticleInformationText article={article}/>
      <ArticleInformationComments article={article} comments={comments} handleDelete={handleDelete}/>
    </div>
  );
};

export default ArticleInformation;