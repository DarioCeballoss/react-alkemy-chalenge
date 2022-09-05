import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';
import './Login.css';
function Login() {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');

  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === '' || password === '') {
      swAlert(<h2>conpletar los campos</h2>);
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      swAlert(<h2>Debes escrivir una direccion de correo electronico valid</h2>);
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert(<h2>Credenciales invalidas</h2>);
      return;
    }

    axios.post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        swAlert('Iniciaste sesion correctamente');
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido);
        navigate("/listado");
      })
  }

  return (
    <div className='login'>
      {token && <Navigate to='/listado' replace />}
      <h2>Inicio de sesion</h2>
      <form onSubmit={submitHandler}>
        <label>
          <br />
          <span>Correo electronico</span>
          <br />
          <input placeholder="ingrese email" type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span>
          <br />
          <input placeholder="ingrese password" type="password" name="password" />
        </label>
        <br />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login;