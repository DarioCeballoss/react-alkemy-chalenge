import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


function Buscador(){
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if( keyword.length === 0){
            swAlert(<h5>escrive una palabra clave</h5>);
        }else if(keyword.length < 4){
            swAlert(<h5>por lo menos escrive mas de 4 caracteres</h5>);
        }else{
            e.currentTarget.keyword.value ='';
            navigate(`/resultados?keyword=${keyword}`);
            console.log('busaca: '+keyword);
        }
    }

    return (
        <form onSubmit={submitHandler} className='d-flex aligin-items-center'>
            <label className='form-label'>
                <input className='form-control' type='text' name='keyword' />
            </label>
            <button  className='btn btn-success ml-2' type='submit'>Buscar</button>
        </form>
    );
}

export default Buscador;
