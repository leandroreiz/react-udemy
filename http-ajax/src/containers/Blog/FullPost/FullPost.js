import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../../components/Spinner/Spinner';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        error: false
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios
                    .get(`/posts/${this.props.match.params.id}`)
                    .then(response => this.setState({ loadedPost: response.data }))
                    .catch(error => this.setState({ error: true }));
            }
        }
    }

    deletePostHandler = () => {
        axios
            .delete(`/posts/${this.props.match.params.id}`)
            .then(response => console.log(response));
    }

    render () {
    let post = this.state.loadedPost ? <Spinner /> : null;

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
