import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const slicedTitle = post.title.length > 25 ? post.title.slice(0, 25) + '...' : post.title;
  const slicedBody = post.body.length > 60 ? post.body.slice(0, 60) + '...' : post.body;

  const imgSrc = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className="post-card" onClick={() => navigate(`/item/${post.id}`)}>
      <div>
        <img src={imgSrc} alt={post.title} className="post-img" />
        <div className="post-info">
          <p><strong>User Id :</strong> {post.userId}</p>
          <p><strong>Title :</strong> {slicedTitle}</p>
          <p><strong>Body :</strong> {slicedBody}</p>
        </div>
      </div>
      {post.body.length > 60 && <span className="read-more">Read More...</span>}
    </div>
  );
};

export default PostCard;