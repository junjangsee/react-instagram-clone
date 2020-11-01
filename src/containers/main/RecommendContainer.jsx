import React from 'react';
import Recommend from '../../components/main/Recommend';
import profile from '../../shared/__mocks__/profile';
import recommenders from '../../shared/__mocks__/recommenders';

class RecommendContainer extends React.Component {
  render() {
    return (
      <>
        <Recommend
          nickname={profile.nickname}
          name={profile.name}
          thumbnail={profile.thumbnail}
          recommenders={recommenders}
        />
      </>
    );
  }
}

export default RecommendContainer;
