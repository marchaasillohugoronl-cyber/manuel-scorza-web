// Contacto.jsx
import "./Contacto.css"
import { useState } from "react"

/* ============================================================
   Instala los iconos:  npm install react-icons
   ============================================================ */
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa"

/* ============================================================
   DATOS DE CONTACTO — edita aquí
   ============================================================ */
const INFO = [
  {
    icono: <FaMapMarkerAlt />,
    titulo: "Ubicación",
    valor:  "Cerro Juli, Arequipa, Perú",
    href:   "https://maps.google.com/?q=Cerro+Juli+Paucarpata+Arequipa",
    color:  "#f87171",
  },
  {
    icono: <FaWhatsapp />,
    titulo: "Whastsapp",
    valor:  "999 999 999",
    href:   "https://wa.me/51999999999",
    color:  "#65ea06",
  },
  {
    icono: <FaEnvelope />,
    titulo: "Correo",
    valor:  "marchaasillohugoronl@gmail.com",
    href:   "marchaasillohugoronl@gmail.com",
    color:  "#38bdf8",
  },
  {
    icono: <FaClock />,
    titulo: "Horario",
    valor:  "Lun – Vie: 7:30 am – 4:00 pm",
    href:   null,
    color:  "#a78bfa",
  },
]

const FORM_INICIAL = { nombre: "", correo: "", mensaje: "" }

function Contacto() {
  const [form,    setForm]    = useState(FORM_INICIAL)
  const [enviado, setEnviado] = useState(false)
  const [error,   setError]   = useState("")
  const [cargando,setCargando]= useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    /* Validación */
    if (!form.nombre || !form.correo || !form.mensaje) {
      setError("Por favor completa todos los campos.")
      return
    }
    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      setError("Ingresa un correo válido.")
      return
    }

    setCargando(true)

    try {
      const res = await fetch("https://formspree.io/f/TU_ID", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      })

      if (res.ok) {
        setEnviado(true)
        setForm(FORM_INICIAL)
        setTimeout(() => setEnviado(false), 5000)
      } else {
        setError("Hubo un error al enviar. Intenta de nuevo.")
      }
    } catch {
      setError("Sin conexión. Verifica tu internet.")
    } finally {
      setCargando(false)
    }
  }

  return (
    <section id="contacto" className="contacto">

      {/* ── Encabezado ── */}
      <div className="contacto-header">
        <span className="contacto-badge">Estamos aquí</span>
        <h2>Ponte en <em>Contacto</em></h2>
        <p>¿Tienes alguna consulta? Escríbenos o visítanos directamente.</p>
      </div>

      <div className="contacto-grid">

        {/* ── Info ── */}
        <div className="contacto-info">
          {INFO.map(({ icono, titulo, valor, href, color }) => (
            <div className="info-item" key={titulo} style={{ "--item-color": color }}>
              <span className="info-icono">{icono}</span>
              <div>
                <span className="info-titulo">{titulo}</span>
                {href
                  ? <a href={href} target="_blank" rel="noreferrer" className="info-valor link">{valor}</a>
                  : <span className="info-valor">{valor}</span>
                }
              </div>
            </div>
          ))}

          {/* Mapa */}
          <div className="contacto-mapa">
            <iframe
              title="Ubicación Colegio Manuel Scorza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d-71.54128815615488!3d-16.42520950243373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ29sZWdpbyBNYW51ZWwgU2Nvcnph!5e0!3m2!1ses!2spe!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── Formulario ── */}
        <form className="contacto-form" onSubmit={handleSubmit} noValidate>
          <h3>Envíanos un mensaje</h3>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <div className="input-wrap">
              <span className="input-icono"><FaEnvelope /></span>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <div className="input-wrap">
              <span className="input-icono"><FaEnvelope /></span>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="tucorreo@email.com"
                value={form.correo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              placeholder="¿En qué podemos ayudarte?"
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>

          {/* Feedback */}
          {error && (
            <p className="form-error">
              <FaExclamationTriangle /> {error}
            </p>
          )}
          {enviado && (
            <p className="form-success">
              <FaCheckCircle /> ¡Gracias! Nos pondremos en contacto pronto.
            </p>
          )}

          <button type="submit" className="form-btn" disabled={cargando}>
            {cargando
              ? "Enviando..."
              : <><FaPaperPlane /> Enviar mensaje</>
            }
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contacto