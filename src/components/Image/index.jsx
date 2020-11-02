import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt, className, width, height, margin, padding } = this.props;

    return (
      <img
        src={src}
        className={className}
        style={{ width, height, margin, padding }}
        alt={alt}
      />
    );
  }
}

export default Image;
