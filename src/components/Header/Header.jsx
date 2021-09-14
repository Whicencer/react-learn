import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="header">
      <img
        src="https://www.logodesign.net/images/nature-logo.png"
        alt="logo"
        className="header__logo"
      />
      <div>
        {props.isAuth
          ? <div>
              <NavLink to={`/users/${props.userId}`}>{props.login}</NavLink>
              <button onClick={props.logout} style={{marginLeft: 15}}>logout</button>
            </div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header