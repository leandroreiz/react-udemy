import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import Spinner from '../../../components/Spinner/Spinner';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        loading: false
    }

    componentDidMount() {
        console.log(this.props);

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
        this.props.history.push(`/${id}`);
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
            <section className='Posts'>
                {posts}
            </section>
        );
    }
}

export default Posts;
