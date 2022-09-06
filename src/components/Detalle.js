import { Link, Navigate } from 'react-router-dom';


function Detalle() {
  let token = sessionStorage.getItem('token');
  return (
    <div>
      {!token && <Navigate to='/' replace />}
      <h2>detalle de la pelicula</h2>
    </div>
  );
}

export default Detalle;
