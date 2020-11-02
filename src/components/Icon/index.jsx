import React from 'react';
import { device, instagram_images, home, home_active } from '../../images';

class Icon extends React.Component {
  render() {
    const { type, isToggle, width = 22, height = 22 } = this.props;
    let src = '';
    let typeString = `${type}${isToggle ? '_active' : ''}`;

    switch (typeString) {
      case 'device':
        src = device;
        break;
      case 'instagram_images':
        src = instagram_images;
        break;
      case 'home':
        src = home;
        break;
      case 'home_active':
        src = home_active;
        break;
    }

    return <img src={src} width={width} height={height} />;
  }
}

export default Icon;
