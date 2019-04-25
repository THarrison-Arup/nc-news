import React from 'react';

const ArticleInformationComments = (props) => {
  const {comments} = props;
  return (
    <ul className="Article-Information-Comments">
    <h3>Comments</h3>
      {comments.map(comment => {
        // return <li>{comment.body}</li>
      })}
    </ul>
  );
};

export default ArticleInformationComments;