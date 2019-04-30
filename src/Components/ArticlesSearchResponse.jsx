import React, { Component } from "react";
import { Link } from "@reach/router";

class ArticlesSearchResponse extends Component {
  state = {
    selectedOption: "created_at"
  };

  render() {
    const { articleData, handleSortInput } = this.props;

    const { selectedOption } = this.state;

    function articleSort(a, b) {
      if (selectedOption === "created_at") {
        if (a.created_at < b.created_at) {
          return 1;
        }
        if (a.created_at > b.created_at) {
          return -1;
        }
        return 0;
      }
      if (selectedOption === "comment_count") {
        if (a.comment_count < b.comment_count) {
          return 1;
        }
        if (a.comment_count > b.comment_count) {
          return -1;
        }
        return 0;
      }
      if (selectedOption === "votes") {
        if (a.votes < b.votes) {
          return 1;
        }
        if (a.votes > b.votes) {
          return -1;
        }
        return 0;
      }
    }

    return (
      <main className="Articles-Search-Repsonse">
        <h3 className="Articles-Search-Response-Title">Search Results</h3>
        <form className="Articles-Search-Results-Sort">
          <div className="Article-Information-Results-Radio">
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
          <div className="Article-Information-Results-Radio">
            <label>
              <input
                type="radio"
                value="comment_count"
                checked={selectedOption === "comment_count"}
                onChange={this.handleChange}
              />
              Comment Count
            </label>
          </div>
          <div className="Article-Information-Results-Radio">
            <label>
              <input
                type="radio"
                value="votes"
                checked={selectedOption === "votes"}
                onChange={this.handleChange}
              />
              Votes
            </label>
          </div>
        </form>
        <ul className="Articles-Search-Results">
          {articleData.sort(articleSort).map((article, ind) => {
            return article ? (
              <li key={ind}>
                {`${ind + 1}. `}
                <Link to={`${article.article_id}`}>{`${article.title}`}</Link>
                <br /> by {`${article.author}`}
                <br /> Votes: {`${article.votes}`} Comments:{" "}
                {`${article.comment_count}`} Created:{" "}
                {`${article.created_at}`.slice(0, 10)}
                <br />
                <br />
              </li>
            ) : (
              <li>""</li>
            );
          })}
        </ul>
      </main>
    );
  }

  handleChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };
}

export default ArticlesSearchResponse;
