import React, { Component } from 'react';

import Loading from '../../components/Loading';

import { Container } from './styles';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const response = await api.get(`/articles?limit=5`);

    const data = response.data.map((post) => ({
      ...post,
    }));

    this.setState({ articles: data, loading: false });
  }

  async openPost(id) {}

  render() {
    const { articles, loading } = this.state;

    return (
      <Container>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>

            {articles.map((article) => (
              <div
                key={article.id}
                className="post_card"
                onClick={()=> this.openPost(article.id)}
              >
                <Link to={'/articles/' + article.id}>
                  <div>
                    <img src={article.smallImage} />
                    <div>
                      <h3>{article.title}</h3>
                      <p>{article.content}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </Container>
    );
  }
}
