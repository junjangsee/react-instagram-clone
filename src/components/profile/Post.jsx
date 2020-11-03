import React from 'react';
import Container from '../Container';
import Image from '../Image';

class Post extends React.Component {
  render() {
    const { id, thumbnail } = this.props.post;

    return (
      <Container className='post'>
        <a href={`/post/${id}`}>
          <Image src={thumbnail} />
        </a>
      </Container>
    );
  }
}

export default Post;
