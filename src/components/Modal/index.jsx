import React from 'react';
import Container from '../Container';

class Modal extends React.Component {
  render() {
    const { className, isToggle } = this.props;

    return (
      <>
        {isToggle ? (
          <Container className={className}>
            <div className='close'></div>
            <div className='modal'>{this.props.children}</div>
          </Container>
        ) : null}
      </>
    );
  }
}

export default Modal;
