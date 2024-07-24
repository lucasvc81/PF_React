import '../styles/HomePage.css'
import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
          <img src="img/home/homeadv.png" alt="mkt" />
        </div>
        <div className="columnas">
          <div className="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              doloribus! Maiores dolor rem est iure nihil sapiente? Sed fugit modi
              explicabo commodi necessitatibus dolor, nihil et atque consequatur!
              Fugiat, hic!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              voluptatibus impedit, animi laborum ipsam totam eum quod nisi
              explicabo provident fuga? Architecto assumenda beatae facere animi
              nostrum id tempore nobis.
            </p>
          </div>
          <div className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
              <span className="cita">100% recomendable!!</span>
              <span className="autor">Marcos Galperin - mercadolibre.com.ar</span>
  
            </div>
  
          </div>
        </div>
      </main>
    )
};

export default HomePage;
