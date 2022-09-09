import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados'
import './components/bootstrap.min.css';

function App() {
  const addOrRemoveFavs = e => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieID
    }

    console.log(movieData);
  }

  return (
    <div className=''>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/listado' element={<Listado addOrRemoveFavs={addOrRemoveFavs} />} />
        <Route path='/detalle' element={<Detalle />} />
        <Route path='/resultados' element={<Resultados />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
