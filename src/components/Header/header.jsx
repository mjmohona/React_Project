import logo from '../../assets/logo.svg';
import reactLogo from '../../assets/react.svg';
import classes from './header.module.css';

const Header = () => {
    return (
      <header>
        <div className ="container">
          <div>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={reactLogo} alt="React" className={classes.reactLogo} /><strong
              >React project</strong>
          </div>
        </div>
      </header>
    )
}


export default Header