import React, { Component } from 'react';

import PostsList from '../../assets/components/PostsList';
import PanelHeader from '../../assets/components/PanelHeader';

import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container>
          {/* Everything in the TOP goes here */}
          <div className="topContainer">
            <div className="topBlock">Home  |  Games</div>
          </div>

          <div className="contentWrapper">
            {/* Everything in the LEFT goes here */}
            {/** <div className="leftContainer">
              <div className="panelWidget">
                <PanelHeader panelTitle="Panel 1" />
                Panel Content
              </div>

              <div className="panelWidget">
                <PanelHeader panelTitle="Panel 2" />
                Panel Content
              </div>
            </div> **/}

            {/* Everything in the MIDDLE goes here */}
            <div className="midContainer">
              <div>
                <div className="panelWidget">
                  <PostsList />
                </div>
              </div>
            </div>

            {/* Everything in the RIGHT goes here */}
            <div className="rightContainer">
              <div className="panelWidget">
                <PanelHeader panelTitle="Panel 3" />
                Panel Content
              </div>
            </div>
          </div>

          {/* Everything in the BOTTOM goes here */}
          <div className="bottomContainer">
            <div className="bottomBlock">Bottom Block</div>
          </div>
        </Container>
      </>
    );
  }
}
