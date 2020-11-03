import React from 'react';
import Footer from '../Footer';
import Button from '../Button';
import Container from '../Container';
import Image from '../Image';
import Text from '../Text';

class Recommend extends React.Component {
  render() {
    const { nickname, name, thumbnail, recommenders } = this.props;

    return (
      <Container className='recommend-wrapper'>
        <Container className='recommend-container'>
          <Container className='user-info'>
            <a className='profile-page' href={`/${nickname}`}>
              <Image src={thumbnail} />
            </a>
            <Container className='detail'>
              <a href={`/${nickname}`}>{nickname}</a>
              <Text>{name}</Text>
            </Container>
          </Container>
          <Container className='recommends'>
            <Text>회원님을 위한 추천</Text>
            <a href='/explore/people'>모두 보기</a>
          </Container>
          <Container className='recommender-wrapper'>
            <Container className='recommenders'>
              {recommenders.map((recommender, index) => (
                <Container key={index} className='recommender'>
                  <Container className='profile'>
                    <Image src={recommender.thumbnail} />
                    <Container className='recommender-info'>
                      <Text className='nickname'>{recommender.nickname}</Text>
                      <Text className='message'>회원님을 팔로우합니다</Text>
                    </Container>
                  </Container>
                  <Button className='follow-btn'>팔로우</Button>
                </Container>
              ))}
            </Container>
          </Container>
          <Footer className='footer-wrapper' />
        </Container>
      </Container>
    );
  }
}

export default Recommend;
