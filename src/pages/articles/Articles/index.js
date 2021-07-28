import React, { Component } from 'react';

import ListArticles from '../../../assets/components/ListArticles';
import { Link } from 'react-router-dom';

export default class Articles extends Component {
  render() {
    return (
      <>
        <div className="block-top">
          <span className="breadcrumb-articles">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            Articles
          </span>
        </div>
        <div className="block-panel">
          <ListArticles />
        </div>
      </>
    );
  }
}
