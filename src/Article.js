import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <div>
      <h1>Article</h1>
      <p>Here is some content for the article.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default Article;


