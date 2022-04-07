import React from 'react';
import './styles.css';



export default function Login() {
    function Welcome(props){
        return <h1>Olá {props.name}</h1>
    }

    const element = <Welcome name="Jorge Luis Sampaio de Oliveira" />;
    
    return (
        <div className="login-container">
        <h1>Login</h1>
        <form>    
            <h1>{element}</h1>        
            <input type="text" placeholder="Digite seu usuário" />
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit">Entrar</button>
        </form>
        </div>
    );
    }

