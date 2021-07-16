import React from 'react';
import Spinner from '../Spinner';

const Form = ({user, loading,error,buttonAction,changeUser}) => (
    <div className="formContainer">
        <input
            type="text"
            className="userInput"
            value={user}
            placeholder="Pesquisar repositorio"   
            //sempre que ocorrer uma alteração no meu input eu vou chamar minha função changeUSer  passando o usuario       
            onChange={e => changeUser(e.target.value)}
        ></input>
    <button className="searchButton" onClick={buttonAction}>    
        {loading ? <Spinner></Spinner>: "Buscar"}
    </button>

    <p className="errorText">{error}</p>
    </div>
);

export default Form;