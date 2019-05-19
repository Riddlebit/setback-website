import React, { Component } from 'react';
import { getPostList } from '../../data/blog';
import BlogListEntry from '../../components/BlogListEntry/BlogListEntry';

class BlogListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    getPostList(this.onGetDevlogList);
  }

  onGetDevlogList = posts => {
    this.setState({
      posts: posts
    });
  }

  render() {

    const posts = this.state.posts;

    return (
      <div className="blog-list">
        <div className="blog-list__container">
          <h1>Setback Blog</h1>
          {posts ? (
            this.state.posts.map(post => (
              <BlogListEntry title={post.title} id={post.id} key={post.id} />
            ))
          ) : (
            <div>No posts found...</div>
          )}
        </div>
      </div>
    );
  }
}

export default BlogListView;