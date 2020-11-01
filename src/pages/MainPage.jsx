import React from 'react';
import Header from '../components/Header';
import Story from '../components/main/Story';
import Feed from '../components/main/Feed';
import profile from '../shared/__mocks__/profile';
import feeds from '../shared/__mocks__/feeds';

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
                  {feeds.map((feed, index) => (
                    <Feed
                      key={index}
                      thumbnail={feed.thumbnail}
                      nickname={feed.nickname}
                      likes={feed.likes}
                      nickname={feed.nickname}
                      content={feed.content}
                      comments={feed.comments}
                      date={feed.date}></Feed>
                  ))}
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
