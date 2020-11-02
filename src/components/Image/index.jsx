import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

class Image extends React.Component {
  render() {
    const { src, alt, className, width, height, margin, padding } = this.props;
    const classProps = classNames(style.image, className);

    return (
      <img
        src={src}
        className={classProps}
        style={{ width, height, margin, padding }}
        alt={alt}
      />
    );
  }
}

export default Image;
