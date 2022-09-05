import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import './Listado.css';

function Listado() {
  let token = localStorage.getItem('token');
  const [moviesList, setMovieList] = useState([]);


  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=d56c5fbbe26a26b54e709a37eba67cfe&language=es-ES&page=1';
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMovieList(apiData.results);
      }).catch( () => {
        swAlert(<h2>Error de carga intenta mas tarde</h2>)
      })
  }, [setMovieList]);
  console.log(moviesList);



  return (
    <div className='listado'>
      {!token && <Navigate to='/' replace />}

      <div className='row'>
        {moviesList.map((oneMovie, ind) => {
          return (
            <div className='col-3' key={ind}>
              <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
                  <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          )
        })}


      </div>
    </div>
  );
}

export default Listado;
