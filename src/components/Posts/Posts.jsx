import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Posts.css';

const Posts = (props) => {
    return (
        <div className="posts">
            <h2>Posts</h2>
            <PostsReduxForm onSubmit={(values) => props.addPost(values.postText)} />
            <div className="posts-list">
                {
                    props.posts.map((post, id) => {
                        return <p key={id}>{post.text}</p>
                    })
                }
            </div>
        </div>
    )
}

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Post text" name="postText" component={'textarea'} />
            <button>Post</button>
        </form>
    )
}
const PostsReduxForm = reduxForm({form: 'posts'})(PostsForm)

export default Posts