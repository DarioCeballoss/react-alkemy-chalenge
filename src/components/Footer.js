import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href='http://instagram.com' rel='noopener norefer'>Instagram</a></li>
        </ul>
      </nav>
      <p>
        Deberá utilizar el logotipo de TMDB para identificar su uso de las API de TMDB.
        "Este producto utiliza la API de TMDB, pero TMDB no lo respalda ni lo certifica".
        El uso del logotipo de TMDB no implicará ningún respaldo por parte de TMDB.
      </p>
    </footer>
  );
}

export default Footer;
