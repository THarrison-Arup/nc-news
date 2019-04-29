import React, { Component } from "react";

class ArticleInformationComments extends Component {
  state = {
    selectedOption: "DateCreated"
  };
  render() {
    const {
      comments,
      article,
      handleCommentDelete,
      incCommentVotes
    } = this.props;

    const { selectedOption } = this.state;
    return (
      <div className="Article-Information-Comments">
        <h3 className="Article-Information-Comments-Title">Comments</h3>
        <form className="Article-Information-Comments-Sort">
          <div className="Article-Information-Comments-Radio">
            <label>
              <input
                type="radio"
                value="created_at"
                checked={selectedOption === "created_at"}
                onChange={this.handleChange}
              />
              Date Created
            </label>
          </div>
          <div className="Article-Information-Comments-Radio">
            <label>
              <input
                type="radio"
                value="author"
                checked={selectedOption === "author"}
                onChange={this.handleChange}
              />
              Comment Author
            </label>
          </div>
          <div className="Article-Information-Comments-Radio">
            <label>
              <input
                type="radio"
                value="Votes"
                checked={selectedOption === "Votes"}
                onChange={this.handleChange}
              />
              Votes
            </label>
          </div>
        </form>
        <ul className="Article-Information-Comments-List">
          {comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <a className="Article-Information-Comments-Text">{comment.body}</a>
                <button
                  className="Article-Information-Comments-Delete"
                  onClick={handleCommentDelete(
                    comment.comment_id,
                    article.article_id
                  )}
                >
                  Delete
                </button>
                <button
                  className="Article-Information-Comments-Up"
                  onClick={incCommentVotes(comment.comment_id, +1)}
                >
                  UP!
                </button>
                <button
                  className="Article-Information-Comments-Down"
                  onClick={incCommentVotes(comment.comment_id, -1)}
                >
                  DOWN!
                </button>
                <p className="Article-Information-Comments-Votes">
                  {`VOTES: ${comment.votes}`}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };
}

export default ArticleInformationComments;
