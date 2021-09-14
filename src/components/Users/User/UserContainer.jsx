import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { getUserStatus } from '../../../redux/reducers/userReducer'
import { compose } from 'redux';
import {getStatus, setUser, setStatus, getUser} from '../../../redux/reducers/userReducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

class UserContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.userId)
        this.props.getStatus(this.props.userId)
    }
    componentDidUpdate(prevProps) {
        if(prevProps.userId !== this.props.userId) {
            this.props.getUser(this.props.userId)
            this.props.getStatus(this.props.userId)
        }
    }
    render() {
        return(
           <User user={this.props.user} setStatus={this.props.setStatus} status={this.props.status} isFollowed={this.props.isFollowed} /> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersPage.user,
        status: state.usersPage.status
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, {setUser, getUserStatus, getStatus, setStatus, getUser}))(UserContainerAPI)