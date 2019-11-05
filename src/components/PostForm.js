import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      password: "",
      message: ""
    };

    this.updateAuthor = this.updateAuthor.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateAuthor(value) {
    this.setState({
      author: value
    });
  }

  updatePassword(value) {
    this.setState({
      password: value
    });
  }

  updateMessage(value) {
    this.setState({
      message: value
    });
  }

  handleClick() {
    this.setState({
      author: "",
      password: "",
      message: ""
    });

    this.props.addComment(this.props.threadId, this.state);
  }

  render() {
    return (
      <article className="post">
        <h2 className="section-title section-title-light">投稿する</h2>
        <div className="section-description">
          パスワードは編集時に必要になります
        </div>
        <div className="post-panel">
          <div className="post-field">
            <p className="post-field-label">名前*</p>
            <input
              type="text"
              name="comment-name"
              className="post-field-form"
              value={this.state.author}
              onChange={e => {
                this.updateAuthor(e.target.value);
              }}
            />
          </div>
          <div className="post-field">
            <p className="post-field-label">パスワード</p>
            <input
              type="password"
              name="comment-password"
              className="post-field-form"
              value={this.state.password}
              onChange={e => {
                this.updatePassword(e.target.value);
              }}
            />
          </div>
          <div className="post-field">
            <p className="post-field-label">本文</p>
            <textarea
              name="comment-message"
              rows="5"
              className="post-field-form-textarea"
              value={this.state.message}
              onChange={e => {
                this.updateMessage(e.target.value);
              }}
            />
          </div>
          <div className="post-submit">
            <button
              className="post-btn"
              onClick={e => {
                this.handleClick();
              }}
            >
              投稿
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default PostForm;
