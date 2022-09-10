import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from './Buscador';
import './Header.css';

function Header() {
  return (
    <header className='navbar sticky-top'>
      <nav >
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/listado'>Listado</Link>
          </li>
          <li>
            <Link to='/favoritos'>Favoritos</Link>
          </li>
        </ul>
        <Buscador />
      </nav>
      
    </header>
  );
}

export default Header;
