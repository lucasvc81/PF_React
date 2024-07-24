import '../styles/Nosotros.css'
import React from 'react';

const Nosotros = (props) => {
    return (
        <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          ducimus, atque est odit quo debitis officia minima temporibus eveniet
          unde. Ipsam maiores, earum dolores fugit recusandae quis eos tenetur
          magni.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam
          similique at eum maiores unde soluta ex quae numquam veritatis sequi
          odit, nihil, fugiat placeat illo non, neque vel iure.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="img/nosotros/nosotros1.jpg" alt="Lucas Vieiro Cobas" />
            <h5>Lucas Vieiro Cobas</h5>
            <h6>CEO</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque quaerat esse dignissimos vel error nostrum alias consectetur
              ipsum veritatis labore, similique id, rem aspernatur temporibus
              quasi. Saepe, nisi nihil!
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros2.jpg" alt="Natalia Garavetti" />
            <h5>Natalia Garavetti</h5>
            <h6>CCO</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque quaerat esse dignissimos vel error nostrum alias consectetur
              ipsum veritatis labore, similique id, rem aspernatur temporibus
              quasi. Saepe, nisi nihil!
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros3.jpg" alt="Carlos Varni" />
            <h5>Carlos Varni</h5>
            <h6>Head of IT</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque quaerat esse dignissimos vel error nostrum alias consectetur
              ipsum veritatis labore, similique id, rem aspernatur temporibus
              quasi. Saepe, nisi nihil!
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros4.jpg" alt="Veronica Garavetti" />
            <h5>Veronica Garavetti</h5>
            <h6>CHRO</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque quaerat esse dignissimos vel error nostrum alias consectetur
              ipsum veritatis labore, similique id, rem aspernatur temporibus
              quasi. Saepe, nisi nihil!
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros5.jpg" alt="Javier Vieiro Cobas" />
            <h5>Javier Vieiro Cobas</h5>
            <h6>CFO</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              eaque quaerat esse dignissimos vel error nostrum alias consectetur
              ipsum veritatis labore, similique id, rem aspernatur temporibus
              quasi. Saepe, nisi nihil!
            </p>
          </div>
        </div>
      </div>
    </main>
    )
};

export default Nosotros;