import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postId, category, title, description, authorId, thumbnail}) => {
  return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`posts/${postId}`}>
                <h3>{title}</h3>
            </Link>
            <p>
                {description}
            </p>
            <div className="post_footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`}>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem;