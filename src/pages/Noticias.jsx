// Noticias.jsx
import "./Noticias.css"
import fotoAño from "../assets/logo.png"

/* ============================================================
   NOTICIAS — edita, agrega o quita objetos aquí.
   Para usar imágenes locales:
     import foto from "../assets/foto.jpg"
     y pon: imagen: foto
   ============================================================ */
const NOTICIAS = [
  {
    id:       1,
    categoria: "Inicio del año escolar",
    fecha:    "16 Mar 2026",
    titulo:   "Comienzo del año escolar 2026",
    resumen:  "Los estudiantes presentaron proyectos innovadores que sorprendieron a jueces y familias.",
    imagen:   "https://scontent.flim6-3.fna.fbcdn.net/v/t39.30808-6/470226272_122210321306018281_3867546107102788499_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=a8iyktko62gQ7kNvwGk5KbB&_nc_oc=AdlNuKRo91vHtCeqMPjFeF24yd7EX6_iLlKEG9Sx68BqcAvfvCOLhfnGYya4MQo2yls&_nc_zt=23&_nc_ht=scontent.flim6-3.fna&_nc_gid=60fO5bNcASAojtApaUkuEw&_nc_ss=8&oh=00_AfxHho4G3rqw-_YWwPN-4OYYxCZO52Y_tOcHjxk0eHwzJg&oe=69BD237F",
    destacada: true,   // la primera card ocupa más espacio
  },
  {
    id:       2,
    categoria: "Deportes",
    fecha:    "3 Mar 2025",
    titulo:   "Actividades Deportivas",
    resumen:  "Competencias entre grados fortalecieron el compañerismo y el espíritu deportivo.",
    imagen:   "https://scontent.flim6-3.fna.fbcdn.net/v/t39.30808-6/473239601_122214469382018281_1241049404026278123_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=OM12Sm7oMKQQ7kNvwEs3g7M&_nc_oc=AdnvKBm3YQOQ7U44Zp_zQ_wSgZJWRGsR4EINZHu7zSPuAMlpizy2viE4pinTf8eMRY0&_nc_zt=23&_nc_ht=scontent.flim6-3.fna&_nc_gid=8P3-1eyl-gE3q8jLt0o7Lg&_nc_ss=8&oh=00_AfywMy3FW5BCNIKNrWo5h_zJJYzNl5xHFEKPQu1rhcMO9Q&oe=69BCEA4F",
    destacada: false,
  },
  {
    id:       3,
    categoria: "Académico",
    fecha:    "16 Mar 2025",
    titulo:   "Nuevo Año Escolar",
    resumen:  "Damos la bienvenida a nuestros estudiantes al inicio del nuevo año académico 2025.",
    imagen:   "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    destacada: false,
  },

  // Luego reemplaza la URL:
{
  id:        4,
  categoria: "Académico",
  fecha:     "16 Mar 2025",
  titulo:    "Nuevo Año Escolar",
  resumen:   "Damos la bienvenida a nuestros estudiantes al inicio del nuevo año académico 2025.",
  imagen:    fotoAño,   // 👈 
  destacada: false,
},
  /* ── Para agregar una noticia, copia este bloque: ──
  {
    id:        4,
    categoria: "Categoría",
    fecha:     "DD Mmm YYYY",
    titulo:    "Título de la noticia",
    resumen:   "Breve descripción de la noticia.",
    imagen:    "URL o import local",
    destacada: false,
  },
  ──────────────────────────────────────────────────── */
]

/* Colores por categoría */
const CATEGORIA_COLOR = {
  Ciencia:   "#7ad20e",
  Deportes:  "#65ea06",
  Académico: "#a78bfa",
  default:   "#55f50b",
}

function Noticias() {
  return (
    <section id="noticias" className="noticias">

      {/* ── Encabezado ── */}
      <div className="noticias-header">
        <span className="noticias-badge">Últimas novedades</span>
        <h2>Noticias del <em>Colegio</em></h2>
        <p>Entérate de todo lo que ocurre en nuestra comunidad educativa.</p>
      </div>

      {/* ── Grid ── */}
      <div className="noticias-grid">
        {NOTICIAS.map((n) => {
          const color = CATEGORIA_COLOR[n.categoria] ?? CATEGORIA_COLOR.default
          return (
            <article
              key={n.id}
              className={`noticia-card ${n.destacada ? "destacada" : ""}`}
              style={{ "--card-color": color }}
            >
              {/* Imagen */}
              <div className="noticia-img">
                <img src={n.imagen} alt={n.titulo} loading="lazy" />
                <span className="noticia-categoria">{n.categoria}</span>
              </div>

              {/* Contenido */}
              <div className="noticia-body">
                <time className="noticia-fecha">{n.fecha}</time>
                <h3>{n.titulo}</h3>
                <p>{n.resumen}</p>
                              </div>
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default Noticias