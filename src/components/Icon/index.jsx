import React from 'react';
import {
  device,
  instagram_images,
  home,
  home_active,
  comment,
  comment_active,
  direct,
  direct_active,
  explore,
  explore_active,
  feed,
  feed_active,
  heart,
  heart_active,
  like,
  like_active,
  save,
  save_active,
  setting,
  trans,
  option,
  share,
  close,
  options,
} from '../../images';

class Icon extends React.Component {
  render() {
    const { type, className, isToggle, width = 22, height = 22 } = this.props;
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
      case 'comment':
        src = comment;
        break;
      case 'comment_active':
        src = comment_active;
        break;
      case 'direct':
        src = direct;
        break;
      case 'direct_active':
        src = direct_active;
        break;
      case 'explore':
        src = explore;
        break;
      case 'explore_active':
        src = explore_active;
        break;
      case 'heart':
        src = heart;
        break;
      case 'heart_active':
        src = heart_active;
        break;
      case 'feed':
        src = feed;
        break;
      case 'feed_active':
        src = feed_active;
        break;
      case 'like':
        src = like;
        break;
      case 'like_active':
        src = like_active;
        break;
      case 'save':
        src = save;
        break;
      case 'save_active':
        src = save_active;
        break;
      case 'setting':
        src = setting;
        break;
      case 'trans':
        src = trans;
        break;
      case 'option':
        src = option;
        break;
      case 'share':
        src = share;
        break;
      case 'close':
        src = close;
        break;
      case 'options':
        src = options;
        break;
    }

    return (
      <img src={src} className={className} width={width} height={height} />
    );
  }
}

export default Icon;
