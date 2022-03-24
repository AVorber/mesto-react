function Header(props) {
  return (
    <header className="header">
      <a href="#" className="header__logo-link">
        <img src={props.logo} alt="Место" className="header__logo" />
      </a>
      <hr className="header__line" />
    </header>
  );
}

export default Header;
