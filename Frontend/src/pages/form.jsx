import '../assets/form.css'
import Imagen from '../assets/form.png'
import React, { useState, useRef } from 'react';



export default function Form () {
  const [link, setLink] = useState("Regístrate")
  const [description, setDescription] = useState('Inicie sesión para continuar');
  const [mensajeTexto, setMensajeTexto] = useState("¿No tienes una cuenta? ")
  const [titulo, setTitulo] = useState("¡Bienvenido de nuevo!")
  const backdropRef = useRef(null);
  const [showRegister, setShowRegister] = useState(false)

  //Formularios
  function FormularioLogin(props) {
    return (
      <form>
        <input type="email" name="correo" id="" placeholder='Correo'/>
        <span className='smallMargin'></span>
        <input type="password" name="" id="" placeholder='Contraseña'/>
        <span className='normalMargin'></span>
        <a className='mutedLink' href="">¿Olvidaste tu contraseña?</a>
        <span className='bigMargin'></span>
        <button type='submit'>Iniciar Sesión</button>
        <span className='bigMargin'></span>
        <p className = "mutedLink" id="mensaje">{mensajeTexto}<a id="link" onClick={handleClick}>{link}</a></p>
      </form>
    )
  }
  
  function FormularioRegister(props) {
    return (
      <form>
        <input type="name" placeholder='Nombre' />
        <span className='smallMargin'></span>
        <input type="email" name="" id="" placeholder='Correo'/>
        <span className='smallMargin'></span>
        <input type="password" name="" id="" placeholder='Contraseña'/>
        <span className='normalMargin'></span>
        <button type='submit'>Registrarse</button>
        <span className='bigMargin'></span>
        <p className = "mutedLink" id="mensaje">{mensajeTexto}<a id="link" onClick={handleClick}>{link}</a></p>
      </form>
    )
  }

  //cambiar entre formulario
  const handleClick = () => {
    if (link==="Regístrate") {
      backdropRef.current.classList.add('expanded');    

      setTimeout(() => {
        backdropRef.current.classList.remove('expanded');
      }, 1500);

      setTimeout(() => {
        setLink("Iniciar sesión")
        setMensajeTexto("¿Ya tienes cuenta? ")
        setTitulo('¡Registra tu cuenta!')
        setDescription('Es fácil y rápido')
        setShowRegister(!showRegister);
      }, 450)

    } else {
      backdropRef.current.classList.add('expanded');
      setTimeout(() => {
        backdropRef.current.classList.remove('expanded');
      }, 1500);

      setTimeout(() => {
        setLink("Regístrate")
        setMensajeTexto("¿No tienes una cuenta? ")
        setTitulo("¡Bienvenido de nuevo!")
        setDescription('Inicie sesión para continuar')
        setShowRegister(!showRegister);
      }, 450)
    }

  }

  //HTML
  return(
    <div className="signin">
      <div className="img">
        <img src={ Imagen } alt= "Clothes" />
      </div>
      <div className="Header">
        <div className="TopContainer">
          <div className="BackDrop" ref={backdropRef}></div>
          <div className="HeaderContainer">
            <h2 id="titulo">{titulo}</h2>
            <h5 id="description">{description}</h5>
          </div> 
        </div>
        <div className="innerContainer">
          {showRegister ? <FormularioRegister /> : <FormularioLogin />}
        </div>
      </div>
    </div>
  )
}
