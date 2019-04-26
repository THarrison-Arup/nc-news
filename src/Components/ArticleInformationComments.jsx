import React from "react";

const ArticleInformationComments = props => {
  const { comments } = props;
  return (
    <div className="Article-Information-Comments">
      <h3 className="Article-Information-Comments-Title">Comments</h3>
      <form className="Article-Information-Comments-Sort">
        <div className="Article-Information-Comments-Radio">
          <label>
            <input type="radio" value="Date Created" checked={true} />
            Date Created
          </label>
        </div>
        <div className="Article-Information-Comments-Radio">
          <label>
            <input type="radio" value="Comment Count" />
            Comment Count
          </label>
        </div>
        <div className="Article-Information-Comments-Radio">
          <label>
            <input type="radio" value="Votes" />
            Votes
          </label>
        </div>
      </form>
      <ul className="Article-Information-Comments-List">
        {comments.map(comment => {
          return <li>{comment.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArticleInformationComments;
