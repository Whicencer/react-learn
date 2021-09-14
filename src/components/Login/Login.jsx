import './Login.css';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/reducers/authReducer';
import { connect } from 'react-redux';
import { requiredField } from '../../utils/form-validator/form-validator';
import { Element } from '../../common/FormsControls/FormsControls';
import '../../common/FormsControls/FormsControls.css'
import { Redirect } from 'react-router';

const Input = Element('input')

const LoginForm = (props) => {
    return (
        <form className="login-form" onSubmit={props.handleSubmit}>
            <div>
                <Field type="email" component={Input} validate={[requiredField]} name="email" placeholder="Email" />
            </div>
            <div>
                <Field type="password" component={Input} name="password" validate={[requiredField]} placeholder="Password" />
            </div>
            <div>
                <Field type="checkbox" component="input" name="rememberMe" />
                remember me
            </div>
            {
                    props.error && <div className="form-control form-control--error">{props.error}</div>
            }
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (value) => {
        props.login(value)
    }

    if(props.isAuth) {
        return <Redirect to={`/users/${props.userId}`} />
    }

    return (
        <>
            <h2>Login Page</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}
export default connect(mapStateToProps, {login})(Login)