import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Profile from '../components/profile/Profile';
import profile from '../shared/__mocks__/profile';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header profile={profile} />
        <Container className='main-wrapper'>
          <Container className='main-container'>
            <Container className='main'>
              <Profile profile={profile} />
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default MainPage;
