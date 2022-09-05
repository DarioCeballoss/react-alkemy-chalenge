import { Link, Navigate } from 'react-router-dom';
import './Listado.css';

function Listado() {
  let token = localStorage.getItem('token');


  return (
    <div className='listado'>
      {!token && <Navigate to='/' replace />}

      <div className='row'>
        <div className='col-3' style={{ border: '1px solid red' }}>
          <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listado;
