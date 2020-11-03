import React from 'react';
import Icon from './Icon';
import Container from './Container';
import Text from './Text';
import Image from './Image';
import Button from './Button';

class Header extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <Container tag='header' className='main-header'>
        <Container className='header-wrapper'>
          <Container className='logo'>
            <Image src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' />
          </Container>
          <Container className='search'>
            <Text className='search-image'></Text>
            <Text className='search-word'>검색</Text>
          </Container>
          <Container className='tabs-wrapper'>
            <Container className='tabs'>
              <Button className='home-button'>
                <Icon type='home' isToggle={true} />
              </Button>
              <Button className='share-button'>
                <Icon type='direct' />
              </Button>
              <Button className='explore-button'>
                <Icon type='explore' />
              </Button>
              <Button className='heart-button'>
                <Icon type='feed' />
              </Button>
              <Button className='profile-button'>
                <Container className='image'>
                  <Image src={profile.thumbnail} />
                </Container>
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Header;
