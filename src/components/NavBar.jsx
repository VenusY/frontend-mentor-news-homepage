import { useState } from 'react';
import '../styles/scss/NavBar.scss';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='nav-bar'>
      <a href='#' className='nav-bar__logo-button'>
        <img
          src={require('../assets/images/logo.svg')}
          alt='Logo'
          className='nav-bar__logo'
        />
      </a>

      <button
        className={`nav-bar__button  nav-bar__menu-button ${
          menuOpen === true ? 'nav-bar__menu-button--hidden' : null
        }`}
        onClick={handleClick}
      >
        <img
          src={require('../assets/images/icon-menu.svg')}
          alt='Menu button'
        />
      </button>

      <button
        className={`nav-bar__button  nav-bar__close-button ${
          menuOpen === true ? 'nav-bar__close-button--visible' : null
        }`}
        onClick={handleClick}
      >
        <img
          src={require('../assets/images/icon-menu-close.svg')}
          alt='Close button'
        />
      </button>

      <nav className={`pages ${menuOpen === true ? 'pages--visible' : null}`}>
        <a href='#' className='pages__link'>
          Home
        </a>
        <a href='#' className='pages__link'>
          New
        </a>
        <a href='#' className='pages__link'>
          Popular
        </a>
        <a href='#' className='pages__link'>
          Trending
        </a>
        <a href='#' className='pages__link'>
          Categories
        </a>
      </nav>
      <div
        className={`pages__transparent-background ${
          menuOpen === true ? 'pages__transparent-background--visible' : null
        }`}
      ></div>
    </header>
  );
}
