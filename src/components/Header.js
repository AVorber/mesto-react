import React from "react";

function Header({logo}) {
  return (
    <header className="header">
      <a href="#" className="header__logo-link">
        <img src={logo} alt="Место" className="header__logo" />
      </a>
      <hr className="header__line" />
    </header>
  );
}

export default Header;
