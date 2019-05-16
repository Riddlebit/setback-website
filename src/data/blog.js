const blogUrl = process.env.REACT_APP_BLOG_URL;

export const getPostList = (callback) => {
  const request = `${blogUrl}/posts.json`;
  fetch(request, {
    headers: {
      'Accept': 'application/vnd.github.VERSION.raw'
    }
  })
  .then(res => {
    if (res.ok) {
      res.json().then(postList => callback(postList));
    } else {
      callback(null);
    }
  })
  .catch(err => console.error(err));
}

export const getPost = (postName, callback) => {
  const request = `${blogUrl}/test/${postName}.md`;
  fetch(request, {
    headers: {
      'Accept': 'application/vnd.github.VERSION.raw'
    }
  })
  .then(res => {
    if (res.ok) {
      res.text().then(postData => callback(postData));
    } else {
      callback(null);
    }
  })
  .catch(err => console.error(err));
}