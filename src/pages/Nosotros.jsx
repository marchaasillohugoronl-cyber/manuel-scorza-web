import "./Nosotros.css"

/* ============================================================
   IMÁGENES — agrega o quita objetos en este array.
   src: ruta desde /src/assets/
   alt: descripción accesible de la imagen
   label: etiqueta que aparece sobre la foto
   ============================================================ */
const GALERIA = [
  {
    src: new URL("../assets/primaria.jpg",   import.meta.url).href,
    alt: "Estudiantes de primaria en clases",
    label: "Primaria",
  },
  {
    src: new URL("../assets/secundaria.jpg", import.meta.url).href,
    alt: "Estudiantes de secundaria en el patio",
    label: "Secundaria",
  },
  /* ── Para añadir más fotos, copia este bloque: ──
  {
    src: new URL("../assets/TU-FOTO.jpg", import.meta.url).href,
    alt: "Descripción de la foto",
    label: "Etiqueta visible",
  },
  ─────────────────────────────────────────────── */

]

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">

      {/* ── Encabezado ── */}
      <div className="nosotros-header">
        <span className="nosotros-badge">Quiénes somos</span>
        <h2>Sobre el Colegio<br /><em>Manuel Scorza</em></h2>
        <p className="nosotros-desc">
          El Colegio Manuel Scorza es una institución educativa dedicada
          a la formación integral de los estudiantes, promoviendo valores,
          disciplina y excelencia académica. Nuestro objetivo es formar
          ciudadanos responsables capaces de contribuir al desarrollo
          de la sociedad.
        </p>
      </div>

      {/* ── Galería de fotos ── */}
      <div className="nosotros-galeria">
        {GALERIA.map((foto, i) => (
          <div className="nosotros-card" key={i}>
            <div className="nosotros-img-wrap">
              <img src={foto.src} alt={foto.alt} loading="lazy" />
              <span className="nosotros-img-label">{foto.label}</span>
            </div>
          </div>
        ))}
      </div>



    </section>
  )
}

export default Nosotros