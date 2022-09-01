
function Login() {
  const submitHandler = e => {
    e.preventDefault();
    console.log('se envia formulario');
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email==='' || password==='') {
      console.log('conpletar los campos');
      return;
    }

    if(email !== '' && !regexEmail.test(email)){
      console.log('debes escrivir una direccion de correo electronico valida');
      return;
    }

    if(email !== 'challenge@alkemy.org' || password !=='react'){
      console.log('Credenciales invalidas');
      return;
    }

    console.log('OK estamos listos para enviar la informacion ');
  }

  return (
    <>
      <h2>Formulario de Login</h2>
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
    </>
  )
}

export default Login;