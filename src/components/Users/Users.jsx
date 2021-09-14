import React from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css';

const Users = (props) => {
    return (
        <div>
            <h2>Users</h2>
            <div className="users">
                {
                    props.users.map((user, id) => {
                        return (
                            <div className="user" key={id}>
                                <NavLink to={`/users/${user.id}`}>
                                    <img className="user-image" src={user.photos.large ? `${user.photos.large}` : `https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg`} alt="avatar" />
                                    <h4 className="user-title">{user.name}</h4>
                                </NavLink>
                                <button disabled={props.followingInProcess.includes(user.id)} onClick={() => {props.toggleFollow(user)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button className="arrow" onClick={() => props.currentPage !== 1 && props.onPageChanged(props.currentPage - 1)}>Back</button>
                <button className="arrow" onClick={() => props.currentPage !== 500 && props.onPageChanged(props.currentPage + 1)}>Forward</button>
            </div>
        </div>
    )
}

export default Users