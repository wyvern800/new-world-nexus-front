import React, { Component } from 'react';
import api from '../../services/api';

import { Container } from './styles';

import Loading from '../../assets/components/Loading';

export default class Posts extends Component {
  state = {
    post: [],
    loading: true,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/posts/${id}`);

    this.setState({ loading: false, post: response.data });
  }

  render() {
    const { post, loading } = this.state;

    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>{post.title}</div>
          </>
        )}
      </Container>
    );
  }
}
