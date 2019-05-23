import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { getPost } from "../../data/blog";
import Footer from "../../components/Footer/Footer";

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
          <div className="blog-post__content">
            <Link to="/blog" className="blog-post__back-btn">
              <i className="fas fa-chevron-left"></i>
              Back to blog list
            </Link>
            <ReactMarkdown source={this.state.postData} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogPostView;
