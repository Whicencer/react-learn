import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logout } from '../../redux/reducers/authReducer'
import { compose } from 'redux'

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default compose(connect(mapStateToProps, {logout}))(HeaderContainer)