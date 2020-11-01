import React from 'react';

class Device extends React.Component {
  render() {
    return <div className='device'>{this.props.children}</div>;
  }
}

export default Device;
