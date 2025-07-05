import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeController from "./ThemeController";

function NavLinkItem({ to, children, isActive }) {
  const baseClasses = " font-bold bg-clip-text text-transparent text-shadow-sm text-shadow-white/10 bg-gradient-to-r from-info to-accent text-xl";
  const activeClasses = isActive ? "rounded-full shadow-sm shadow-accent/50" : "";
  
  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`}>{children}</Link>
  );
}

function NavLinkMobileItem({ to, children, isActive }) {
  const baseClasses = "font-bold bg-clip-text text-transparent bg-gradient-to-r from-info to-accent text-lg";
  const activeClasses = isActive ? "rounded-full bg-base-300 shadow-sm shadow-accent/25" : "";

  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`}>{children}</Link>
  );
}


function SubMenu({ title, links, location }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSubActive = links.some(({ to }) => location.pathname.startsWith(to));
  const summaryClasses = `rounded-full text-shadow-md text-shadow-sm text-shadow-white/10 bg-clip-text text-transparent bg-gradient-to-r from-info to-accent font-bold cursor-pointer list-none ${isSubActive ? "text-accent" : ""} ${isSubActive ? "shadow-sm shadow-accent/50" : ""}`;
  const handleMouseEnter = () => { setIsOpen(true); };
  const handleSubMenuMouseLeave = () => { setIsOpen(false); };

  return (
    <details onMouseEnter={handleMouseEnter} open={isOpen}>
      <summary className={`${summaryClasses} pointer-events-none pr-0 text-xl`}><span>{title}</span></summary>
      <ul className="pt-5 pl-1 bg-transparent backdrop-blur-lg rounded-b-box rounded-t-none shadow-xl z-10" onMouseLeave={handleSubMenuMouseLeave}>
        {links.map(({ to, label }) => (
          <li key={to}><NavLinkItem to={to} isActive={false}>{label}</NavLinkItem></li>
        ))}
      </ul>
    </details>
  );
}


function SubMenuMobile({ title, links, location }) {
  const isSubActive = links.some(({ to }) => location.pathname.startsWith(to));
  const summaryClasses = `text-lg rounded-lg hover:bg-base-200 bg-clip-text text-transparent bg-gradient-to-r from-info to-accent font-bold cursor-pointer ${isSubActive ? "text-accent" : ""}`;

  return (
    <details className="group">
      <summary className="text-info"><a className={summaryClasses}>{title}</a></summary>
      <ul className="mt-2 mb-4 space-y-1 text-right">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={`font-bold text-info ${location.pathname.startsWith(to) ? "text-shadow-white/15 text-shadow-sm" : ""}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}


function ThemeAndLogin({ isMobile }) {
  return (
    <div className={`${isMobile ? "space-y-3 text-right" : "hidden lg:flex items-center space-x-4 mr-0"}`}>
      <div className="mr-5"><ThemeController /></div>
      <button className={`btn btn-accent rounded-full shadow-xl text-shadow-lg font-bold border-y-0 bg-gradient-to-b from-info to-accent text-base-100 ${isMobile ? "w-full rounded-none mb-0" : ""}`}>УВІЙТИ</button>

    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuLinks = [
    { to: "/diary", label: "Щоденник" },
    { to: "/diagnostics", label: "Діагностика" },
    { to: "/ai", label: "AI Допомога" },
  ];
  const surveyLinks = [
    { to: "/testing", label: "Тестування" },
    { to: "/survey", label: "Анкетування" },
  ];

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-base-100 bg-neutral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <div className="navbar-start">
            <Link to="/" className="text-3xl text-shadow-sm text-shadow-primary/12 font-bold bg-gradient-to-r from-accent to-info bg-clip-text text-transparent">ROZUMITY</Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4">
              <li><SubMenu title="Опитування" links={surveyLinks} location={location} /></li>
              {menuLinks.map(({ to, label }) => (
                <li key={to}><NavLinkItem to={to} isActive={location.pathname.startsWith(to)}>{label}</NavLinkItem></li>
              ))}
            </ul>
          </div>

          <div className="navbar-end flex items-center space-x-4">
            <ThemeAndLogin />
            <button className="btn px-1 bg-transparent border-0 btn-ghost lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden pt-1 fixed top-16 left-0 right-0 z-40 bg-base-100/75 backdrop-blur-sm border-base-200 shadow-xl">
          <ul className="px-6 py-6 space-y-5 text-right max-w-7xl mx-auto">
            <li><SubMenuMobile title="Опитування" links={surveyLinks} location={location} /></li>
            {menuLinks.map(({ to, label }) => (
              <li key={to}><NavLinkMobileItem to={to} isActive={location.pathname.startsWith(to)}>{label}</NavLinkMobileItem></li>
            ))}
          </ul>
          <ThemeAndLogin isMobile />
        </div>
      )}
    </>
  );
}
