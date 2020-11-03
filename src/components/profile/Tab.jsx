import React from 'react';
import Icon from '../Icon';
import Text from '../Text';
import Container from '../Container';

class Tab extends React.Component {
  render() {
    return (
      <>
        <Container className='tab-wrapper'>
          <Container className='tabs'>
            <a className='tab on' href='/junjangsee/'>
              <Icon type='post' isToggle={true} width={12} height={12} />
              <Text>게시물</Text>
            </a>
            <a className='tab' href=''>
              <Icon type='igtv' width={12} height={12} />
              <Text>IGTV</Text>
            </a>
            <a className='tab' href=''>
              <Icon type='saved' width={12} height={12} />
              <Text>저장됨</Text>
            </a>
            <a className='tab' href=''>
              <Icon type='tag' width={12} height={12} />
              <Text>태그됨</Text>
            </a>
          </Container>
        </Container>
      </>
    );
  }
}

export default Tab;
