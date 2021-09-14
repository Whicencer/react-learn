import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { withRouter } from 'react-router';
import {setUsers, setCurrentPage, toggleFollow, toggleFollowProcess} from '../../redux/reducers/userReducer';
import UserContainer from './User/UserContainer';
import { getUsers } from '../../api/api';
import { compose } from 'redux';


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        getUsers()
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return this.props.match.params.userId ? <UserContainer userId={this.props.match.params.userId} /> : <Users users={this.props.users} followingInProcess={this.props.followingInProcess} toggleFollowProcess={this.props.toggleFollowProcess} currentPage={this.props.currentPage} toggleFollow={this.props.toggleFollow} onPageChanged={this.onPageChanged.bind(this)} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        followingInProcess: state.usersPage.followingInProcess
    }
}

export default compose(withRouter, connect(mapStateToProps, {setUsers, setCurrentPage, toggleFollow, toggleFollowProcess}))(UsersContainerAPI)