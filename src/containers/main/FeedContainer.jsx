import React from 'react';
import Feed from '../../components/main/Feed';
import feeds from '../../shared/__mocks__/feeds';

class FeedContainer extends React.Component {
  render() {
    return (
      <>
        {feeds.map((feed, index) => (
          <Feed
            key={index}
            thumbnail={feed.thumbnail}
            nickname={feed.nickname}
            likes={feed.likes}
            nickname={feed.nickname}
            content={feed.content}
            comments={feed.comments}
            date={feed.date}
            images={feed.images}
          />
        ))}
      </>
    );
  }
}

export default FeedContainer;
