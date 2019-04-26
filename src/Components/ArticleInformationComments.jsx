import React, {Component} from "react";

class ArticleInformationComments extends Component {
  state = {
    selectedOption: "DateCreated"
  };
  render() {
    const { comments } = this.props;

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
                checked={selectedOption === 'created_at'}
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
                checked={selectedOption === 'author'}
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
                checked={selectedOption === 'Votes'}
                onChange={this.handleChange}
                />
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
  }
  selectedOption = () => {

  };

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };

}

export default ArticleInformationComments;
