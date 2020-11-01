import React from 'react';
import Header from '../components/Header';
import Story from '../components/main/Story';
import FeedContainer from '../containers/main/FeedContainer';
import profile from '../shared/__mocks__/profile';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header profile={profile} />
        <div className='main-wrapper'>
          <div className='main-container'>
            <div className='main'>
              <div className='contents'>
                <Story />
                <div className='feed-wrapper'>
                  <FeedContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
