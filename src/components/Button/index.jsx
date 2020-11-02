import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

class Button extends React.Component {
  render() {
    const {
      type = 'button',
      className,
      children,
      padding,
      margin,
      width,
      height,
      onClick,
    } = this.props;

    const classProps = classNames(style.button, className);

    return (
      <button
        type={type}
        className={classProps}
        style={{ padding, margin, width, height }}
        onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
