import React from 'react';
import Container from '../Container';
import Text from '../Text';
import Image from '../Image';
import Button from '../Button';
import Icon from '../Icon';

class Profile extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <Container className='profile-wrapper'>
        <Container className='profile'>
          <Container className='thumbnail'>
            <Image src={profile.thumbnail} />
          </Container>
          <Container tag='section' className='info'>
            <Container className='tabs'>
              <Text tag='h2' className='nickname'>
                {profile.nickname}
              </Text>
              <Container className='edit'>
                <a href='/accounts/edit/'>프로필 편집</a>
              </Container>
              <Button className='options'>
                <Icon type='options' width={24} height={24} />
              </Button>
            </Container>
            <Container className='statuses'>
              <dl className='status'>
                <Container className='posts'>
                  <dt>게시물</dt>&nbsp;
                  <dd>{profile.posts.length}</dd>
                </Container>
                <Container className='follower'>
                  <dt>팔로워</dt>&nbsp;
                  <dd>{profile.followers.length}</dd>
                </Container>
                <Container className='follow'>
                  <dt>팔로우</dt>&nbsp;
                  <dd>{profile.followings.length}</dd>
                </Container>
              </dl>
            </Container>
            <Container className='description'>
              <Text tag='h1'>{profile.name}</Text>
              <Text tag='span'>{profile.description}</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Profile;
