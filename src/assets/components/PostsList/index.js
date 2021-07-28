import React, { Component } from 'react';

import Loading from '../../components/Loading';

import { Container } from './styles';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    const response = await api.get(`/posts?limit=5`);

    const data = response.data.map((post) => ({
      ...post,
    }));

    this.setState({ posts: data, loading: false });
  }

  async openPost(id) {}

  render() {
    const { posts, loading } = this.state;

    return (
      <Container>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {posts.map((post) => (
              <div
                key={post.id}
                className="post_card"
                onClick={()=> this.openPost(post.id)}
              >
                <Link to={'/posts/' + post.id}>
                  <div>
                    <img src={post.smallImage} />
                    <div>
                      <h3>{post.title}</h3>
                      <p>{post.content}</p>
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
