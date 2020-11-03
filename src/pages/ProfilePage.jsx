import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Profile from '../components/profile/Profile';
import Tab from '../components/profile/Tab';
import PostContainer from '../containers/profile/PostContainer';
import profile from '../shared/__mocks__/profile';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header profile={profile} />
        <Container className='main-wrapper'>
          <Container className='main-container'>
            <Container className='profile-container'>
              <Profile profile={profile} />
              <Tab />
              <PostContainer />
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default MainPage;
