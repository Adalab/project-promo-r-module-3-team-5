import '../styles/components/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header-image" src={props.image} alt="Logo web" />
      </NavLink>
    </header>
  );
};
export default Header;
