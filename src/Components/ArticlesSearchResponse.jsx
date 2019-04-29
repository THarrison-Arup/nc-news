import React, {Component} from "react";
import { Link } from "@reach/router";

class ArticlesSearchResponse extends Component {
  state = {
    selectedOption: "DateCreated"
  };

  render() {
    const { articleData, handleSortInput } = this.props;

    const { selectedOption } = this.state;

    return (
      <main className="Articles-Search-Repsonse">
        <h3 className="Articles-Search-Response-Title">Search Results</h3>
        <form className="Articles-Search-Results-Sort">
          <div className="Article-Information-Results-Radio">
            <label>
              <input
                type="radio"
                value="created_at"
                checked={selectedOption === "created_at" && handleSortInput("created_at")}
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
          {articleData.map((article, ind) => {
            return (
              <li key={ind}>
                {article ? (
                  <Link to={`${article.article_id}`}>{`${ind+1}. ${article.title}`}</Link>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  };

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };
}

export default ArticlesSearchResponse;
