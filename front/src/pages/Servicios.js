import '../styles/Servicios.css'
import React from 'react';

const Servicios = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
          <img src="img/servicios/Viapublica_adk.png" alt="adketing" />
          <div class="info">
            <h4>Via Publica</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus deserunt natus cumque, eveniet obcaecati ut, repellendus
              quaerat voluptate non consequuntur dolor, placeat nihil magni odit
              vel nesciunt omnis expedita?
            </p>
          </div>
        </div>
        <div className="servicio">
          <img src="img/servicios/mktonline.png" alt="adketing" />
          <div class="info">
            <h4>Marketing Online</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus deserunt natus cumque, eveniet obcaecati ut, repellendus
              quaerat voluptate non consequuntur dolor, placeat nihil magni odit
              vel nesciunt omnis expedita?
            </p>
          </div>
        </div>
        <div className="servicio">
          <img src="img/servicios/publicidadoffline.png" alt="adketing" />
          <div className="info">
            <h4>Publicidad Offline</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus deserunt natus cumque, eveniet obcaecati ut, repellendus
              quaerat voluptate non consequuntur dolor, placeat nihil magni odit
              vel nesciunt omnis expedita?
            </p>
          </div>
        </div>
        <div className="servicio">
          <img src="img/servicios/seo-semweb.png" alt="adketing" />
          <div class="info">
            <h4>SEO - SEM</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus deserunt natus cumque, eveniet obcaecati ut, repellendus
              quaerat voluptate non consequuntur dolor, placeat nihil magni odit
              vel nesciunt omnis expedita?
            </p>
          </div>
        </div>
  
      </main>
    )
};

export default Servicios;