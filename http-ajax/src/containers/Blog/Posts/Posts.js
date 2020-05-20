import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import Spinner from '../../../components/Spinner/Spinner';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Leandro'
                    }
                });
                this.setState({ posts: updatedPosts, loading: false });
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: true });
            });
    }

    postSelectedHandler = id => {
        //this.props.history.push({ pathname: `/${id}` }); // both sintaxes are valid
        this.props.history.push(`/posts/${id}`);
    }

    render() {
        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>;
            
        if (!this.state.error) {
            posts = <Spinner />;
            if (!this.state.loading) {
                posts = this.state.posts.map(post => {
                    return (
                        //<Link to={`/${post.id}`} key={post.id}>
                            <Post
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)} />
                        //</Link>
                    );
                });
            }
        }
    
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
