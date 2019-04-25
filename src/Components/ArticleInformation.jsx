import React from 'react';
import ArticleInformationText from './ArticleInformationText';
import ArticleInformationComments from './ArticleInformationComments';

const ArticleInformation = (props) => {
  
  const { article } = props

  return (
    <div className="Article-Information">
      <ArticleInformationText article={article}/>
      <ArticleInformationComments />
    </div>
  );
};

export default ArticleInformation;