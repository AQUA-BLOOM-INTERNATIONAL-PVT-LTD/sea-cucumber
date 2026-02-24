import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebook, name: "facebook", href: "#" },
    { Icon: FaInstagram, name: "instagram", href: "#" },
  ];
  return (
    <footer className="relative bg-[#050B1A] text-slate-200 pt-20 pb-10 mt-20">
      {/* Floating CTA card */}
      <div className="absolute -top-16 left-0 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl bg-[#0A2365] text-white rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 px-6 sm:px-10 py-6 sm:py-7">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-1">
              Ready to work with us?
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Looking for a trusted sea cucumber export partner?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1">
              Aqua Bloom International Pvt Ltd is here to support your next
              project.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 rounded-lg bg-white text-black text-sm font-semibold shadow-md hover:bg-black/80 transition whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
          {/* Brand */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">
              Aqua Bloom
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium sea cucumber processing and export company committed to
              quality, sustainability, and long-term partnerships.
            </p>
          </div>

          {/* Customers */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Customers
            </h5>
            <ul className="space-y-1.5 text-sm text-slate-400">
              <li>Importers &amp; Distributors</li>
              <li>Wholesale Buyers</li>
              <li>Hospitality &amp; Retail</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Company
            </h5>
            <ul className="space-y-1.5 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-slate-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-slate-200">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Further info / social */}
          <div>
            <h5 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Further Information
            </h5>
            <ul className="space-y-1.5 text-sm text-slate-400 mb-4">
              <li>Export &amp; Quality Standards</li>
              <li>Privacy &amp; Terms</li>
            </ul>

            <p className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#111827] text-slate-200 flex items-center justify-center text-sm hover:bg-[#1f2937] hover:text-white transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aqua Bloom International Pvt Ltd.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;