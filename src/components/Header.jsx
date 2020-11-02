import React from 'react';
import Icon from './Icon';

class Header extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <header className='main-header'>
        <div className='header-wrapper'>
          <div className='logo'>
            <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' />
          </div>
          <div className='search'>
            <span className='search-image'></span>
            <span className='search-word'>검색</span>
          </div>
          <div className='tabs-wrapper'>
            <div className='tabs'>
              <button className='home-button' type='button'>
                <Icon type='home' isToggle={true} />
              </button>
              <button className='share-button' type='button'>
                <Icon type='direct' />
              </button>
              <button className='explore-button' type='button'>
                <Icon type='explore' />
              </button>
              <button className='heart-button' type='button'>
                <Icon type='feed' />
              </button>
              <button className='profile-button' type='button'>
                <div className='image'>
                  <img src={profile.thumbnail} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
