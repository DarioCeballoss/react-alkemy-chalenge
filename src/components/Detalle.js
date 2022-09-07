import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Detalle.css';


function Detalle() {
  let token = sessionStorage.getItem('token');
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');
  const [oneMovie, setOneMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=d56c5fbbe26a26b54e709a37eba67cfe&language=es-ES`;
    axios.get(endPoint)
      .then(response => {
        const movieData = response.data;
        setOneMovie(movieData);
      }).catch(() => {
        console.log('error de carga')
      })
  }, [movieID]);


  return (

    <div className='detalle'>
      {!token && <Navigate to='/' replace />}
      {oneMovie &&
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title}</h5>
                <ul>
                  {oneMovie.genres.map(genero => <li key={genero.id}>{genero.name}</li>)}
                </ul>
                <p className="card-text">{oneMovie.overview}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>

      }
    </div>
  );
}

export default Detalle;
