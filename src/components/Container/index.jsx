import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

class Container extends React.Component {
  render() {
    const {
      className,
      display,
      margin,
      padding,
      width,
      height,
      tag = 'div',
      children,
    } = this.props;
    const classProps = classNames(style.container, className);

    let Element = '';

    switch (tag) {
      case 'header':
        Element = tag;
        break;
      case 'footer':
        Element = tag;
        break;
      case 'section':
        Element = tag;
        break;
      case 'main':
        Element = tag;
        break;
      case 'nav':
        Element = tag;
        break;
      case 'aside':
        Element = tag;
        break;
      case 'div':
        Element = tag;
        break;
    }

    return (
      <Element
        className={classProps}
        style={{ display, margin, padding, width, height, tag }}>
        {children}
      </Element>
    );
  }
}

export default Container;
