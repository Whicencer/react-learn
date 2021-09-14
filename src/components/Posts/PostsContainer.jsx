import { connect } from 'react-redux';
import { addPost } from '../../redux/reducers/userReducer'
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.usersPage.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => dispatch(addPost(postText))
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer