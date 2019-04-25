import React from 'react';

const ArticleInformationText = (props) => {
  const {article} = props
  return (
    <div className="Article-Information-Text">
        <h3>Author</h3>
        {article.author}
        <h3>Topic</h3>
        {article.topic}
        <h4>{article.body}</h4>
    </div>
  );
};

export default ArticleInformationText;