import { Link } from 'react-router-dom';


function Favoritos(props) {


  return (
    <div className='row'>
      {props.favorites.map((oneMovie, ind) => {
        return (
          <div className='col-3' key={ind}>
            <div className="card">
              <img className="card-img-top" src={oneMovie.imgURL} alt="Card cap" />
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
  );
}

export default Favoritos;
