import React from 'react';
import Icon from '../Icon';
import Button from '../Button';
import Container from '../Container';
import Image from '../Image';
import Text from '../Text';

class LoginForm extends React.Component {
  render() {
    return (
      <>
        <Container className='form-wrapper'>
          <Container className='form-container'>
            <Text tag='h1' className='main-logo'></Text>
            <form method='POST'>
              <input
                className='name'
                type='text'
                placeholder='전화번호, 사용자 이름 또는 이메일'
              />
              <input
                className='password'
                type='password'
                placeholder='비밀번호'
              />
              <input type='submit' value='로그인' />
            </form>
            <Container className='line'>
              <Container className='left-border'></Container>
              <Container className='or'>또는</Container>
              <Container className='right-border'></Container>
            </Container>
            <Container className='facebook'>
              <Button className='facebook-login-btn'>
                <Text className='facebook-logo'></Text>
                <Text>Facebook으로 로그인</Text>
              </Button>
            </Container>
            <a className='find-password' href=''>
              비밀번호를 잊으셨나요?
            </a>
          </Container>
          <Container className='sign-up-wrapper'>
            <Container className='sign-up'>
              <Text>계정이 없으신가요?</Text>
              <a className='to-sign-up' href=''>
                가입하기
              </a>
            </Container>
          </Container>
          <Container className='download-app'>
            <Text tag='p'>앱을 다운로드하세요.</Text>
            <Container className='image-container'>
              <a
                className='app-store'
                href='https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo'
                target='_blank'>
                <Image
                  src={
                    'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png'
                  }
                />
              </a>
              <a
                className='google-store'
                href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DCFCE8561-EB45-4834-9CD9-CB4D2DC02783%26utm_content%3Dlo%26utm_medium%3Dbadge'
                target='_blank'>
                <Image
                  src={
                    'https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png'
                  }
                />
              </a>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}

export default LoginForm;
