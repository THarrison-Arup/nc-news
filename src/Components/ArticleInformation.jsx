import React from 'react';
import ArticleInformationText from './ArticleInformationText';
import ArticleInformationComments from './ArticleInformationComments';

const ArticleInformation = (props) => {
  
  const { article, comments } = props

  return (
    <div className="Article-Information">
      <ArticleInformationText article={article}/>
      <ArticleInformationComments comments={comments}/>
    </div>
  );
};

export default ArticleInformation;