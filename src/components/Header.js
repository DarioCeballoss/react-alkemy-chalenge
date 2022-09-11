import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from './Buscador';
import './Header.css';

function Header(props) {
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
          <li>
            {props.favorites.length> 0 && <span>favoritos: {props.favorites.length}</span>}
          </li>
        </ul>
        <Buscador />
      </nav>
      
    </header>
  );
}

export default Header;
