import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Listado.css';

function Listado() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      navigate("/");
    }

  }, []);

  return (
    <div className='listado'>
      <h1>LISTADO</h1>
    </div>
  );
}

export default Listado;
