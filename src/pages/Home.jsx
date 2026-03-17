// Home.jsx
import "./Home.css"

/* ── Reutiliza la misma función de navegación suave ── */
const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

function Home() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>Colegio Manuel Scorza</h1>
        <p>Formando estudiantes con valores, conocimiento y disciplina.</p>

        <div className="hero-buttons">
          {/* Botón principal → sección Nosotros */}
          <button className="btn-primary" onClick={() => scrollTo("nosotros")}>
            Conoce Nuestro Colegio
          </button>

         
        </div>
      </div>
    </section>
  )
}

export default Home