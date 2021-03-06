import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Leandro',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        };
        axios
            .post('/posts', data)
            .then(response => {
                console.log(response);
                this.props.history.push('/posts');
                //this.setState({submitted: true});
            });
    }

    render () {
        //let redirect = this.state.submitted ? <Redirect to="/posts"/> : null;

        return (
            <div className="NewPost">
                {/*redirect*/}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Leandro</option>
                    <option value="Manu">Chelem</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;