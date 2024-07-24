import '../styles/Contacto.css'
import React from 'react';

const Contacto = (props) => {
    return (
        <main className="holder contacto">   
      <div>
        <h2>Contacto rápido</h2>
        <form className="formulario" action="" method="" >
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea></textarea>
          </p>
          <p className="acciones"><input type="submit" value="Enviar" /> 
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>Tambien puede contactarse con nosotros a través de los siguientes medios:</p>
        <ul>
          <li>Tel. +54 9 11 3067 2352</li>
          <li>Email: info@adketing.com</li>
          <li>Facebook: AdKeting</li>
          <li>Instagram: AdKeting</li>
          <li>Skype: AdKeting</li>
        </ul>

      </div>
    </main>
    )
};

export default Contacto;