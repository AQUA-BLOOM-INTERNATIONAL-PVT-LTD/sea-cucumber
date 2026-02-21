import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { HiHome, HiUser, HiPhotograph, HiMail } from 'react-icons/hi'

const SideBar = ({ isOpen, onClose }) => {

  const navLinks = [
    { to: '/', label: 'Home', icon: HiHome },
    { to: '/about', label: 'About', icon: HiUser },
    { to: '/gallery', label: 'Gallery', icon: HiPhotograph },
    { to: '/contact', label: 'Contact', icon: HiMail },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-blue-100 bg-gradient-to-b from-blue-50 to-white">

            <div>
              <h2 className="text-[#0A2365] font-semibold text-lg">Menu</h2>
              <p className="text-[#2774E1] text-xs">AQUABLOOM INTERNATIONAL PVT LTD</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#0A2365] hover:bg-blue-100 transition"
            >
              <IoClose size={26} />
            </button>

          </div>

          {/* NAV */}
          <nav className="flex flex-col px-4 py-6 gap-2">

            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={onClose}
                className="group flex items-center px-4 py-3 rounded-xl text-[#0A2365] font-medium transition-all duration-200 hover:bg-blue-50 hover:text-[#2774E1]"
              >
                <Icon className="w-5 h-5 mr-3 text-[#2774E1] group-hover:scale-110 transition-transform" />
                {label}
              </Link>
            ))}

          </nav>

          {/* FOOTER CTA */}
          <div className="mt-auto px-6 pb-8">

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-[#0A2365] text-sm mb-3 font-medium">
                Need help?
              </p>

              <Link
                to="/contact"
                onClick={onClose}
                className="block bg-[#0A2365] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0A2365]/90 transition"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>
      </aside>
    </>
  )
}

export default SideBar