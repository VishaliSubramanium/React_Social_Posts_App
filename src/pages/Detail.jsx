import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { items: posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="detail-container">
        <p>Post not found.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Back to Home
        </button>
      </div>
    );
  }

  const imgSrc = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className="detail-container">
      <div className="detail-title-header">
        Details Page For Post With ID {post.id}
      </div>
      <img src={imgSrc} alt={post.title} className="detail-img" />
      <div className="detail-info">
        <p><strong>User Id :</strong> {post.userId}</p>
        <p><strong>Title :</strong> {post.title}</p>
        <p><strong>Body :</strong> {post.body}</p>
      </div>
    </div>
  );
};

export default Detail;