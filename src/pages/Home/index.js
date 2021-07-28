import React, { Component } from 'react';

import ListArticles from '../../assets/components/ListArticles';
import PanelHeader from '../../assets/components/PanelHeader';

import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container>
          {/* Everything in the TOP goes here */}
          {/* <div className="block-top">Home</div> */}

          <div className="main">
            {/* Everything in the LEFT goes here */}
            {/** <div className="block-left">
              <div className="block-panel">
                <PanelHeader panelTitle="Panel 1" />
                Panel Content
              </div>

              <div className="block-panel">
                <PanelHeader panelTitle="Panel 2" />
                Panel Content
              </div>
            </div> **/}

            {/* Everything in the MIDDLE goes here */}
            <div className="block-middle">
              <div>
                <div className="block-panel">
                  <ListArticles />
                </div>
              </div>
            </div>

            {/* Everything in the RIGHT goes here */}
            <div className="block-right">
              <div className="block-panel">
                <PanelHeader panelTitle="Panel 3" />
                Panel Content
              </div>
            </div>
          </div>

          {/* Everything in the BOTTOM goes here */}
          <div className="block-bottom">
            Bottom Block
          </div>
        </Container>
      </>
    );
  }
}
