import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/users" className="nav__link">
              Users
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/dialogs" className="nav__link">
              Messages
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/news" className="nav__link">
              News
            </NavLink>
          </li>
          <li className="nav__item">
            <span href="#" className="nav__link">
              Music
            </span>
          </li>
        </ul>
      </nav>
      <div className="friends">
        <h2>Friends</h2>
        <div className="friends-list">
        {props.friends.map((el, id) => {
              return (
                <div className="friends-list__item" key={id}>
                  <img src={el.avatar} alt="avatar" className="friends-list__item-avatar" />
                  <p className="friends-list__item-name">{el.name}</p>
                </div>
              );
            })}
          <div className="friends-list__item"></div>
          <div className="friends-list__item"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
