import '../styles/scss/NavBar.scss';

export default function NavBar() {
  return (
    <header className='nav-bar'>
      <a href='#' className='nav-bar__logo-button'>
        <img
          src={require('../assets/images/logo.svg')}
          alt='Logo'
          className='nav-bar__logo'
        />
      </a>

      <button className='nav-bar__button  nav-bar__menu-button'>
        <img
          src={require('../assets/images/icon-menu.svg')}
          alt='Menu button'
        />
      </button>

      <button className='nav-bar__button nav-bar__close-button'>
        <img
          src={require('../assets/images/icon-menu-close.svg')}
          alt='Close button'
        />
      </button>

      <nav className='pages'>
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
      <div className='pages__transparent-background'></div>
    </header>
  );
}
