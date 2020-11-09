import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Container from './Container';
import Text from './Text';
import Image from './Image';
import Button from './Button';
import Modal from './Modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onClickProfile = this.onClickProfile.bind(this);
  }

  state = {
    profileToggle: false,
  };

  onClickProfile() {
    this.setState((state) => (state.profileToggle = !state.profileToggle));
  }

  render() {
    const { profile, history } = this.props;

    return (
      <Container tag='header' className='main-header'>
        <Container className='header-wrapper'>
          <Link to='/main'>
            <Container className='logo'>
              <Image src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' />
            </Container>
          </Link>
          <Container className='search'>
            <Text className='search-image'></Text>
            <Text className='search-word'>검색</Text>
          </Container>
          <Container className='tabs-wrapper'>
            <Container className='tabs'>
              <Button
                className='home-button'
                onClick={() => history.push('/main')}>
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
              <Button className='profile-button' onClick={this.onClickProfile}>
                <Container className='image'>
                  <Image src={profile.thumbnail} />
                </Container>
                <Container className='modal-wrapper'>
                  <Modal
                    className='modal-container'
                    isToggle={this.state.profileToggle}>
                    <div className='arrow'></div>
                    <Link to='/main/profile'>
                      <Container className='list'>
                        <Container className='icon'>
                          <Icon type='profile' width={16} height={16} />
                        </Container>
                        <Container className='text'>
                          <Text>프로필</Text>
                        </Container>
                      </Container>
                    </Link>
                    <a href=''>
                      <Container className='list'>
                        <Container className='icon'>
                          <Icon type='save' width={16} height={16} />
                        </Container>
                        <Container className='text'>
                          <Text>저장됨</Text>
                        </Container>
                      </Container>
                    </a>
                    <a href=''>
                      <Container className='list'>
                        <Container className='icon'>
                          <Icon type='setting' width={16} height={16} />
                        </Container>
                        <Container className='text'>
                          <Text>설정</Text>
                        </Container>
                      </Container>
                    </a>
                    <Container className='change-sign'>
                      <Container className='icon'>
                        <Icon type='change' width={16} height={16} />
                      </Container>
                      <div className='text'>
                        <Text>계정 전환</Text>
                      </div>
                    </Container>
                    <Link to='/sign'>
                      <Container className='logout'>
                        <Text>로그아웃</Text>
                      </Container>
                    </Link>
                  </Modal>
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
