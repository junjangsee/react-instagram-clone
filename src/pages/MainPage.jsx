import React from 'react';
import Header from '../components/Header';
import profile from '../shared/__mocks__/profile';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header profile={profile} />
      </>
    );
  }
}

export default MainPage;
