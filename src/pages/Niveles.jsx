// Niveles.jsx
import "./Niveles.css"
import primaria   from "../assets/primaria.jpg"
import secundaria from "../assets/secundaria.jpg"

/* ============================================================
   DATOS DE NIVELES — edita aquí sin tocar el JSX
   ============================================================ */
const NIVELES = [

  {
    nivel:       "Primaria",
    emoji:       "📚",
    descripcion: "Formación académica integral con énfasis en matemáticas, comunicación y valores que forjan el carácter del estudiante.",
    imagen:      primaria,
    color:       "#38bdf8",
    logros: ["Matemática", "Comunicación", "Ciencia y Tecnología"],
  },
  {
    nivel:       "Secundaria",
    emoji:       "🎓",
    descripcion: "Preparación sólida para la vida universitaria y profesional, fomentando el pensamiento crítico y la responsabilidad.",
    imagen:      secundaria,
    color:       "#a78bfa",
    logros: ["Ciencias", "Humanidades", "Orientación vocacional"],
  },
]

function Niveles() {
  return (
    <section id="niveles" className="niveles">

      {/* ── Encabezado ── */}
      <div className="niveles-header">
        <span className="niveles-badge">Lo que ofrecemos</span>
        <h2>Niveles <em>Educativos</em></h2>
        <p>Una educación completa desde los primeros años hasta la preparación universitaria.</p>
      </div>

      {/* ── Cards ── */}
      <div className="niveles-cards">
        {NIVELES.map(({ nivel, emoji, descripcion, imagen, color, logros }) => (
          <div className="nivel-card" key={nivel} style={{ "--card-color": color }}>

            {/* Imagen o gradiente */}
            <div className="nivel-img">
              {imagen
                ? <img src={imagen} alt={`Nivel ${nivel}`} loading="lazy" />
                : <div className="nivel-img-placeholder">{emoji}</div>
              }
              <span className="nivel-tag">{nivel}</span>
            </div>

            {/* Contenido */}
            <div className="nivel-body">
              <h3>{emoji} {nivel}</h3>
              <p>{descripcion}</p>

              <ul className="nivel-logros">
                {logros.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Niveles