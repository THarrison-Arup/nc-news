import React from 'react';
import ArticleInformationText from './ArticleInformationText';
import ArticleInformationComments from './ArticleInformationComments';

const ArticleInformation = () => {
  return (
    <div className="Article-Information">
      <ArticleInformationText />
      <ArticleInformationComments />
    </div>
  );
};

export default ArticleInformation;