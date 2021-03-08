import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { DecisionDialog } from "../index";
import { AuthAPI } from "../../Api";
import UserNav from "./UserNav";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.elements";

const Navbar = () => {
  const history = useHistory();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [userBoard, setUserBoard] = useState(false);

  const toggleMobileMenu = () =>
    setClick((state) => {
      return !state;
    });

  const closeMobileMenu = () => {
    if (click) {
      setClick(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const logOutCallBack = () => {
    AuthAPI.logout();
    setUserBoard(false);
    history.push("/");
  };

  useEffect(() => {
    const user = AuthAPI.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setUserBoard(true);
    }

    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Fragment>
      {userBoard ? (
        <UserNav user={currentUser} logOutCallBack={logOutCallBack} />
      ) : (
        <IconContext.Provider
          value={{
            color: "#fff",
          }}
        >
          <Nav>
            <NavbarContainer>
              <NavLogo to="/" onClick={closeMobileMenu}>
                <NavIcon />
                <i
                  style={{
                    letterSpacing: "2px",
                  }}
                >
                  <b
                    style={{
                      color: "#e3fc56",
                    }}
                  >
                    trans
                  </b>
                  lify
                </i>
              </NavLogo>
              <MobileIcon onClick={toggleMobileMenu}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>
              <NavMenu onClick={closeMobileMenu} click={click}>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/services">Services</NavLink>
                </NavItem>
                <NavItem>
                  {button ? (
                    <DecisionDialog
                      actionText="Sign Up"
                      btnText="Sign Up"
                      small="true"
                    />
                  ) : (
                    <DecisionDialog
                      actionText="Sign Up"
                      btnText="Sign Up"
                      big="true"
                    />
                  )}
                </NavItem>
                <NavItem>
                  {button ? (
                    <DecisionDialog
                      actionText="Sign In"
                      btnText="Sign In"
                      small="true"
                    />
                  ) : (
                    <DecisionDialog
                      actionText="Sign In"
                      btnText="Sign In"
                      big="true"
                    />
                  )}
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      )}
    </Fragment>
  );
};

export default Navbar;
