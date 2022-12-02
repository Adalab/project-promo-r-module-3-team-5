import "../styles/components/Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <a href="index.html">
        <img className="header-image" src={props.image} />
      </a>
    </header>
  );
};
export default Header;
