// @flow

import * as React from 'react';
import './SiteWrapper.css';
import { APP_NAME, NAVBAR_ITEMS } from './constants.js';
import { Site } from 'tabler-react';

import NavItems from './components/NavItems';

class SiteWrapper extends React.Component {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: '/',
          alt: APP_NAME,
          imageURL: 'https://bityacht.io/img/logo.svg',
          navItems: <NavItems />,
        }}
       
      >
        <div className="container main-section">{this.props.children}</div>
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
