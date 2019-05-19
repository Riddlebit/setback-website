import React from 'react';
import { Link } from 'react-router-dom';

const BlogListEntry = props => {
  return (
    <Link to={'/blog/'+props.id} className="blog-list-entry">
      <h3>{props.title}</h3>
    </Link>
  );
}

export default BlogListEntry;