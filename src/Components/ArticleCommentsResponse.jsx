import React from 'react';

const ArticleCommentsResponse = (props) => {
  const {commentResponse} = props;

  return (
    <div className="Article-Comments-Response">
      {commentResponse}
    </div>
  );
};

export default ArticleCommentsResponse;