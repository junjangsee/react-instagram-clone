import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Image from '../Image';

class Post extends React.Component {
  render() {
    const { id, thumbnail } = this.props.post;

    return (
      <Container className='post'>
        <Link to={`/post/${id}`}>
          <Image src={thumbnail} />
        </Link>
      </Container>
    );
  }
}

export default Post;
