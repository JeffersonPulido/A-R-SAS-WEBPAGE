import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
      {/* INIT PAGE INFORMATION */}
      <section className="infoContainer" id="home">
        <div className="imagesLeft zoomIn">
          {/* <img src={family} alt="imgInfo" className="imgInfo"/> */}
        </div>
        <div className="textRight">
          <p className="infoTitle bounceIn">Bienvenidos a</p>
          <p className="infoTitlemin bounceInRight">ALEJANDRA RODRIGUEZ ASESORIAS Y SOLUCIONES SAS</p>
          <p className="infoDesc">Somos una empresa dedicada a realizar afiliaciones a seguridad social corporativas, independientes, comerciantes entre otros.  Ofrecemos servicios de perfilamiento para subsidios de vivienda y reducción de tiempo e interés de créditos hipotecarios o leasing habitacional en convenio con otra entidad.</p>
          <div className="btnMore">
            <a className="btn" href="/history">Leer más</a>
          </div>
        </div>
      </section>
    </>
  )
}
