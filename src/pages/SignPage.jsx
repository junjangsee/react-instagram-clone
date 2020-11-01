import React from 'react';
import Device from '../components/sign/Device';
import LoginForm from '../components/sign/loginForm';
import Footer from '../components/Footer';

class SignPage extends React.Component {
  render() {
    return (
      <div className='global-wrapper'>
        <div className='main-wrapper'>
          <Device />
          <LoginForm />
        </div>
        <Footer className='footer-wrapper' />
      </div>
    );
  }
}

export default SignPage;
