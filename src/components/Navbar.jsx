import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Фото на моделях' },
  { to: '/invisible-mannequin', label: 'Невидимый манекен' },
  { to: '/photo-360', label: 'Фото 360' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/src/assets/Логотип горизонтальный.png" alt="" />

        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+74953446011"
            className="text-sm font-semibold text-slate-700"
          >
            +7 (495) 344 60 11
          </a>
          <button className="rounded-full border border-sky-500 px-4 py-2 text-xs font-semibold uppercase text-sky-600 transition-colors hover:bg-sky-500 hover:text-white">
            Обратный звонок
          </button>
        </div>

        <button
          className="text-slate-700 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Открыть меню"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-slate-100 bg-white px-4 py-4 text-sm font-medium text-slate-600 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+74953446011" className="font-semibold text-slate-700">
            +7 (495) 344 60 11
          </a>
          <button className="rounded-full border border-sky-500 px-4 py-2 text-xs font-semibold uppercase text-sky-600">
            Обратный звонок
          </button>
        </nav>
      )}
    </header>
  )
}

export default Navbar
