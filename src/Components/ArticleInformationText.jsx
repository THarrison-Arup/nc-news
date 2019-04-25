import React from 'react';

const ArticleInformationText = (props) => {
  const {article} = props
  return (
    <div className="Article-Information-Text">
      <p>
        Article Text
        
        {article.body}
      </p>
    </div>
  );
};

export default ArticleInformationText;