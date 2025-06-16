import React from "react";
import classes from './header.module.css'
import logo from '../../assets/logo.svg';
import reactLogo from '../../assets/react.svg';

const Header = () => {
    return (
      <header>
        <div className ="container">
          <div>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={reactLogo} alt="React" className={classes.reactLogo} /><strong
              >React</strong>
          </div>
        </div>
      </header>
    )
}

export default Header