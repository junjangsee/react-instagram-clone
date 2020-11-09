import React from 'react';
import Story from '../components/main/Story';
import FeedContainer from '../containers/main/FeedContainer';
import RecommendContainer from '../containers/main/RecommendContainer';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div className='main-wrapper'>
          <div className='main-container'>
            <div className='main'>
              <div className='contents'>
                <Story />
                <div className='feed-wrapper'>
                  <FeedContainer />
                </div>
              </div>
              <RecommendContainer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
