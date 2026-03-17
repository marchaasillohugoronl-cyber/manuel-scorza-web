// Navbar.jsx
import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../assets/logo.png"

const NAV_ITEMS = [
  { label: "Inicio",   href: "inicio"   },
  { label: "Nosotros", href: "nosotros" },
  { label: "Niveles",  href: "niveles"  },
  { label: "Noticias", href: "noticias" },
  { label: "Contacto", href: "contacto" },
]

function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeItem, setActiveItem] = useState("inicio")

  /* ── Comprime navbar al bajar ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ── Cierra menú al agrandar ventana ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  /* ── IntersectionObserver: activa el ítem según la sección visible ── */
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) => document.getElementById(href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveItem(entry.target.id)
        })
      },
      { threshold: 0.4 }   /* La sección debe ocupar al menos 40% del viewport */
    )

    sections.forEach((el) => observer.observe(el))
    return () => sections.forEach((el) => observer.unobserve(el))
  }, [])

  /* ── Navega suave y cierra menú ── */
  const handleNav = (id) => {
    setActiveItem(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo → vuelve a Inicio */}
      <div className="logo" onClick={() => handleNav("inicio")} role="button">
        <img src={logo} alt="Logo Colegio Manuel Scorza" className="logo-img" />
        <span>Colegio Manuel Scorza</span>
      </div>

      {/* Hamburguesa */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        role="button"
      >
        <div /><div /><div />
      </div>

      {/* Menú */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        {NAV_ITEMS.map(({ label, href }) => (
          <li
            key={href}
            className={activeItem === href ? "active" : ""}
            onClick={() => handleNav(href)}
          >
            {label}
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar