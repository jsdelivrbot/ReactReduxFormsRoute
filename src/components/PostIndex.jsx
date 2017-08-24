import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPost(post) {
        return (
            <li key={post.id} className="list-group-item">
                {post.title}
            </li>
        );
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {Object.values(this.props.posts).map(this.renderPost)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);