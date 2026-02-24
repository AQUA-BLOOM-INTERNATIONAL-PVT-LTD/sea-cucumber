import { NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'

const NavBar = ({ onMenuClick }) => {

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-gradient-to-b from-blue-50 via-white to-blue-100 sticky top-0 z-40 px-5 sm:px-10 shadow-md">

      <div className="flex items-center justify-between h-20">

        {/* Logo */}
        <NavLink to="/">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 font-medium transition ${
                  isActive ? 'text-[#2774E1]' : 'text-[#0A2365]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Circle indicator */}
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#2774E1] scale-110'
                        : 'bg-slate-300'
                    }`}
                  ></span>

                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button onClick={onMenuClick} className="md:hidden text-[#0A2365]">
          <HiMenu size={28} />
        </button>

      </div>

    </nav>
  )
}

export default NavBar