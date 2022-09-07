import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';


function Resultados() {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get('keyword');

  return (
    <div className=''>
    <h1> hola</h1>
    {keyword}
    </div>
  );
}

export default Resultados;
