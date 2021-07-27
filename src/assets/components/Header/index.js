import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HeaderComponent } from './styles';

export default class Header extends Component {
  render() {
    return (
      <HeaderComponent>
        <div className="navbar">
          <Link to="/">
            <img
              alt="New World Nexus"
              className="logo"
              src="https://pbs.twimg.com/profile_images/1392124727976546307/vBwCWL8W.jpg"
            />
          </Link>

          <ul>
            <li>
              <Link to="/">&gt; Home</Link>
            </li>
            <li>
              <Link to="/builds">&gt; Builds</Link>
            </li>
          </ul>
        </div>
      </HeaderComponent>
    );
  }
}
