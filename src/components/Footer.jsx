import React from 'react';
import footers from '../shared/__mocks__/footers';

class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.className}>
        <div className='footers'>
          <ul className='nav-lists'>
            {footers.map((footer, index) => (
              <li className='list' key={index}>
                {footer}
              </li>
            ))}
          </ul>
          <span>&copy; 2020 Instagram from Facebook</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
