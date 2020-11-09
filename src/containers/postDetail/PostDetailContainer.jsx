import React from 'react';
import PostDetail from '../../components/PostDetail';
import profile from '../../shared/__mocks__/profile';
import { useParams } from 'react-router-dom';

function PostDetailContainer() {
  const { id } = useParams();

  const post = profile.posts.filter((post) => {
    return post.id === parseInt(id, 10);
  });

  return <PostDetail post={post[0]} profile={profile} />;
}

export default PostDetailContainer;
