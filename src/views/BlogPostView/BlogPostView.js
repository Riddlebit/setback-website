import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { getPost } from "../../data/blog";

class BlogPostView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      postData: ""
    };
  }

  componentDidMount() {
    const postName = this.props.match.params.postName;
    getPost(postName, this.onGetBlogPost);
  }

  onGetBlogPost = data => {
    let postData = data != null ? data : "Failed to fetch blog post";
    this.setState({
      postData: postData
    });
  };

  render() {
    return (
      <div className="blog-post">
        <div className="blog-post__container">
          <ReactMarkdown source={this.state.postData} />
        </div>
      </div>
    );
  }
}

export default BlogPostView;
