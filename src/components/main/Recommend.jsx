import React from 'react';
import Footer from '../../Footer';

class Recommend extends React.Component {
  render() {
    const { nickname, name, thumbnail, recommenders } = this.props;

    return (
      <div className='recommend-wrapper'>
        <div className='recommend-container'>
          <div className='user-info'>
            <a className='profile-page' href={`/${nickname}`}>
              <Image src={thumbnail} />
            </a>
            <div className='detail'>
              <a href={`/${nickname}`}>{nickname}</a>
              <span>{name}</span>
            </div>
          </div>
          <div className='recommends'>
            <span>회원님을 위한 추천</span>
            <a href='/explore/people'>모두 보기</a>
          </div>
          <div className='recommender-wrapper'>
            <div className='recommenders'>
              {recommenders.map((recommender, index) => (
                <div key={index} className='recommender'>
                  <div className='profile'>
                    <Image src={recommender.thumbnail} />
                    <div className='recommender-info'>
                      <span className='nickname'>{recommender.nickname}</span>
                      <span className='message'>회원님을 팔로우합니다</span>
                    </div>
                  </div>
                  <button className='follow-btn' type='button'>
                    팔로우
                  </button>
                </div>
              ))}
            </div>
          </div>
          <Footer className='footer-wrapper' />
        </div>
      </div>
    );
  }
}

export default Recommend;
