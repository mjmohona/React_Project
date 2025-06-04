import React from "react";
import classes from './header.module.css'

const Header = () => {
    return (
      <header>
        <div className ={classes.container}>
          <div>
            <img class="logo" src="images/logo.svg" alt="Logo" />
          </div>
          <div class="textRight">
            <img src="images/react.svg" alt="React" class="reactLogo" /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}

export default Header