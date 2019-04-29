import React from 'react';
import ArticleInformationText from './ArticleInformationText';
import ArticleInformationComments from './ArticleInformationComments';

const ArticleInformation = (props) => {
  
  const { article, comments, handleCommentDelete, incCommentVotes } = props

  return (
    <div className="Article-Information">
      <ArticleInformationText article={article}/>
      <ArticleInformationComments 
        article={article}
        comments={comments}
        handleCommentDelete={handleCommentDelete}
        incCommentVotes={incCommentVotes}
        />
    </div>
  );
};

export default ArticleInformation;