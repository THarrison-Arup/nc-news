import React from 'react';

const ArticleCommentsResponse = (props) => {
  const {commentResponse} = props;

  return (
    <div className="Article-Comments-Response">
      A user response will appear here...
      {commentResponse}
    </div>
  );
};

export default ArticleCommentsResponse;