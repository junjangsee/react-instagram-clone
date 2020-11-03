import React from 'react';
import Container from '../../components/Container';
import Post from '../../components/profile/Post';
import profile from '../../shared/__mocks__/profile';

class PostContainer extends React.Component {
  state = {
    totalContainer: null,
  };

  componentDidMount() {
    this.setPostContainer();
  }

  setPostContainer() {
    const { posts } = profile;
    const allPosts = [];
    let postsArr = [];
    let count = 0;

    for (let i = 0; i < posts.length; i += 1) {
      count += 1;
      postsArr.push(posts[i]);

      if (count === 3) {
        allPosts.push(postsArr);
        postsArr = [];
        count = 0;
      }

      if (count < 3 && i - (posts.length - 1) === 0) {
        allPosts.push(postsArr);
      }
    }

    this.setState((state) => (state.totalContainer = allPosts));
  }

  render() {
    return (
      <>
        <Container className='posts-wrapper'>
          <Container className='posts-container'>
            {this.state.totalContainer !== null
              ? this.state.totalContainer.map((container, index) => (
                  <Container key={index} className='post-container'>
                    {container.map((post, index) => (
                      <Post key={index} className='post' post={post} />
                    ))}
                  </Container>
                ))
              : null}
          </Container>
        </Container>
      </>
    );
  }
}

export default PostContainer;
