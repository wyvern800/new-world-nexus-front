import React, { Component } from 'react';

import { Container } from './styles';

export default class PanelHeader extends Component {
  render() {
    const { panelTitle } = this.props;

    return (
      <>
        <Container>
          <div>
            <h3><span>{panelTitle}</span></h3>
          </div>
        </Container>
      </>
    );
  }
}
