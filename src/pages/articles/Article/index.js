import React, { Component } from 'react';
import api from '../../../services/api';

import { Container } from './styles';

import Loading from '../../../assets/components/Loading';
import PanelHeader from '../../../assets/components/PanelHeader';

import { Link } from 'react-router-dom';

export default class Article extends Component {
  state = {
    article: [],
    loading: true,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/articles/${id}`);

    this.setState({ loading: false, article: response.data });
  }

  render() {
    const { article, loading } = this.state;

    return (
      <>
        <Container>
          {/* Everything in the TOP goes here */}
          <div className="block-top">
            <span className="breadcrumb-articles">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link to="/articles">Articles</Link>
              <span className="breadcrumb-separator">/</span>
              {article.title}
            </span>
          </div>

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
                  {loading ? (
                    <Loading />
                  ) : (
                    <>
                      <div className="article-wrapper">
                        <img src={article.smallImage} />
                        <h1>{article.title}</h1>
                        <p>{article.content}</p>
                        <div className="article-separator"></div>
                        <div>
                          <div className="reactions">
                            <span>Reactions</span>
                          </div>
                          <span className="signature">--{article.author}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Everything in the RIGHT goes here */}
            {/*<div className="block-right">
              <div className="block-panel">
                <PanelHeader panelTitle="Panel 3" />
                Panel Content
              </div>
                  </div>*/}
          </div>

          {/* Everything in the BOTTOM goes here */}
          <div className="block-bottom">Bottom Block</div>
        </Container>
      </>
    );
  }
}
