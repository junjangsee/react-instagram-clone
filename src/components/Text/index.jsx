import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

class Text extends React.Component {
  render() {
    const {
      className,
      display,
      margin,
      padding,
      fontSize,
      fontWeight,
      color,
      children,
      tag = 'span',
    } = this.props;

    const classProps = classNames(style.text, className);
    let Element = '';

    switch (tag) {
      case 'h1':
        Element = tag;
        break;
      case 'h2':
        Element = tag;
        break;
      case 'h3':
        Element = tag;
        break;
      case 'h4':
        Element = tag;
        break;
      case 'h5':
        Element = tag;
        break;
      case 'h6':
        Element = tag;
        break;
      case 'p':
        Element = tag;
        break;
      case 'span':
        Element = tag;
        break;
      case 'strong':
        Element = tag;
        break;
    }

    return (
      <Element
        className={classProps}
        style={{ display, margin, padding, fontSize, fontWeight, color }}>
        {children}
      </Element>
    );
  }
}

export default Text;
