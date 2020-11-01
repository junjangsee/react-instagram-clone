import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <>
        <div className='form-wrapper'>
          <div className='form-container'>
            <h1 className='main-logo'></h1>
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
            <div className='line'>
              <div className='left-border'></div>
              <div className='or'>또는</div>
              <div className='right-border'></div>
            </div>
            <div className='facebook'>
              <button className='facebook-login-btn' type='button'>
                <span className='facebook-logo'></span>
                <span>Facebook으로 로그인</span>
              </button>
            </div>
            <a className='find-password' href=''>
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <div className='sign-up-wrapper'>
            <div className='sign-up'>
              <span>계정이 없으신가요?</span>
              <a className='to-sign-up' href=''>
                가입하기
              </a>
            </div>
          </div>
          <div className='download-app'>
            <p>앱을 다운로드하세요.</p>
            <div className='image-container'>
              <a
                className='app-store'
                href='https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo'
                target='_blank'>
                <img
                  src={
                    'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png'
                  }
                />
              </a>
              <a
                className='google-store'
                href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DCFCE8561-EB45-4834-9CD9-CB4D2DC02783%26utm_content%3Dlo%26utm_medium%3Dbadge'
                target='_blank'>
                <img
                  src={
                    'https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png'
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
