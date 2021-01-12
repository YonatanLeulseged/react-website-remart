import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='Navbar'>
        <div className='nav-bar-container'>
          <Link to="/" className='navbar-logo'>
            Remart <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick = {handleClick}>
              <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
          <li className = 'nav-item'> 
            <Link to = '/' className = 'nav-links' on Click= {closeMobileMenu}>
                Home
            </Link>
          </li>
          <li className = 'nav-item'> 
            <Link to = '/services' className = 'nav-links' on Click= {closeMobileMenu}>
                Services
            </Link>
          </li>
          <li className = 'nav-item'> 
            <Link to = '/products' className = 'nav-links' on Click= {closeMobileMenu}>
                Products
            </Link>
          </li>
          <li className = 'nav-item'> 
            <Link to = '/sign-up' className = 'nav-links-mobile' on Click= {closeMobileMenu}>
                Sign Up
            </Link>
          </li>
          </ul>
          {button && <Button buttonStyle ='btn--outline'> SIGN UP </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
