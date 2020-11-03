import React from 'react';
import Container from '../Container';

class Device extends React.Component {
  render() {
    return <Container className='device'>{this.props.children}</Container>;
  }
}

export default Device;
