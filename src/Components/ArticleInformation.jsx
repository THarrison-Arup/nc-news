import React from 'react';
import ArticleInformationText from './ArticleInformationText';
import ArticleInformationComments from './ArticleInformationComments';

const ArticleInformation = (props) => {
  
  const { article, comments, handleCommentDelete, handleCommentVote } = props

  return (
    <div className="Article-Information">
      <ArticleInformationText article={article}/>
      <ArticleInformationComments 
        article={article}
        comments={comments}
        handleCommentDelete={handleCommentDelete}
        handleCommentVote={handleCommentVote}
        />
    </div>
  );
};

export default ArticleInformation;