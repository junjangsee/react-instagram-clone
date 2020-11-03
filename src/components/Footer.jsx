import React from 'react';
import footers from '../shared/__mocks__/footers';
import Container from './Container';

class Footer extends React.Component {
  render() {
    return (
      <Container tag='footer' className={this.props.className}>
        <Container className='footers'>
          <ul className='nav-lists'>
            {footers.map((footer, index) => (
              <li className='list' key={index}>
                {footer}
              </li>
            ))}
          </ul>
          <span>&copy; 2020 Instagram from Facebook</span>
        </Container>
      </Container>
    );
  }
}

export default Footer;
