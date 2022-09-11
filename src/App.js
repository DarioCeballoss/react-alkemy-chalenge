import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados'
import Favoritos from './components/Favoritos';

import './components/bootstrap.min.css';

function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem('favs');
    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);

    }
    console.log(favsInLocal);
  }, [favorites]);

  const addOrRemoveFavs = e => {
    const favMovies = localStorage.getItem('favs');
    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }
    console.log(movieData);

    let movieInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });
    console.log(movieInArray);
    if (!movieInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);
      console.log('se guardó');
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(tempMoviesInFavs);
      console.log('se elimino');
    }
  }


  return (
    <div className=''>
      <Header favorites={favorites} />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/listado' element={<Listado addOrRemoveFavs={addOrRemoveFavs} />} />
        <Route path='/detalle' element={<Detalle />} />
        <Route path='/resultados' element={<Resultados addOrRemoveFavs={addOrRemoveFavs} />} />
        <Route path='/favoritos' element={<Favoritos favorites={favorites} addOrRemoveFavs={addOrRemoveFavs} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
