import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import profile from '../shared/__mocks__/profile';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header profile={profile} />
        <Container className='main-wrapper'>
          <Container className='main-container'>
            <Container className='main'></Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default MainPage;
