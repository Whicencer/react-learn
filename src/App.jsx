import "./App.css";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import WithRouterUsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import { initializeApp } from "./redux/reducers/appReducer";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return 'WAIT PLEASE'
    }
    return (
      <BrowserRouter>
        <div className="wrapper">
          <HeaderContainer />
          <SidebarContainer />
          <div className="wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/users/:userId?"
              render={() => <WithRouterUsersContainer />}
            />
            <Route path="/login" component={Login} />
            <Route path="/news" component={News} />
          </div>
          <footer className="footer">footer</footer>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
