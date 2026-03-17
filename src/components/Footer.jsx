import "./Footer.css"
import logo from "../assets/logo.png"
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-col">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>Formando estudiantes con valores y excelencia en Cerro Juli, Arequipa.</p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li onClick={() => document.querySelector("#inicio")  ?.scrollIntoView({behavior:"smooth"})}>Inicio</li>
            <li onClick={() => document.querySelector("#nosotros")?.scrollIntoView({behavior:"smooth"})}>Nosotros</li>
            <li onClick={() => document.querySelector("#niveles") ?.scrollIntoView({behavior:"smooth"})}>Niveles</li>
            <li onClick={() => document.querySelector("#noticias")?.scrollIntoView({behavior:"smooth"})}>Noticias</li>
            <li onClick={() => document.querySelector("#contacto")?.scrollIntoView({behavior:"smooth"})}>Contacto</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p><FaMapMarkerAlt /> Cerro Juli, Paucarpata — Arequipa</p>
          <p><FaEnvelope /> colegio@manuelscorza.edu.pe</p>
          <div className="footer-redes">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Colegio Manuel Scorza — Todos los derechos reservados.</p>
      </div>

    </footer>
  )
}

export default Footer