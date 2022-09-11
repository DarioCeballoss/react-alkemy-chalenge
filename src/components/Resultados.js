import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import './Listado.css';

function Listado(props) {
  let token = sessionStorage.getItem('token');
  const [moviesList, setMovieList] = useState([]);
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get('keyword');

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=d56c5fbbe26a26b54e709a37eba67cfe&language=es-ES&page=1&include_adult=false&query=${keyword}`;
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data.results;
        setMovieList(apiData);
      }).catch(() => {
        swAlert(<h2>Error de carga intenta mas tarde</h2>)
      })
  }, [keyword]);
  console.log(moviesList);



  return (
    <div className='listado'>
      {!token && <Navigate to='/' replace />}

      <div className='row'>
        {moviesList.map((oneMovie, ind) => {
          return (
            <div className='col-3' key={ind}>
              <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="Card cap" />
                <button 
                onClick={props.addOrRemoveFavs}  
                className='favorite-btn' 
                data-movie-id={oneMovie.id}
                >🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">{oneMovie.overview.substring(0, 100)}...</p>
                  <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View Detail</Link>
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
