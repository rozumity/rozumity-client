import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeController from "./ThemeController";
import ButtonPrimary from '../buttons/ButtonPrimary';

function NavLinkItem({ to, children, isActive }) {
  const baseClasses = "font-primary-1 font-medium bg-clip-text text-transparent text-shadow-2xs text-shadow-primary/25 bg-gradient-to-r from-info to-accent text-lg py-0";
  const activeClasses = isActive ? "rounded-full shadow-sm shadow-accent/50" : "";
  
  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`}>{children}</Link>
  );
}

function NavLinkMobileItem({ to, children, isActive }) {
  const baseClasses = "font-bold bg-clip-text text-transparent bg-gradient-to-r from-info to-accent text-xl";
  const activeClasses = isActive ? "rounded-full bg-base-300 shadow-sm shadow-accent/25" : "";

  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`}>{children}</Link>
  );
}


function SubMenu({ title, links, location }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSubActive = links.some(({ to }) => location.pathname.startsWith(to));
  const summaryClasses = `font-primary-1 font-medium rounded-full bg-clip-text text-transparent text-shadow-2xs text-shadow-primary/25 bg-gradient-to-r from-info to-accent cursor-pointer list-none ${isSubActive ? "text-accent" : ""} ${isSubActive ? "shadow-sm shadow-accent/50" : ""}`;
  const handleMouseEnter = () => { setIsOpen(true); };
  const handleSubMenuMouseLeave = () => { setIsOpen(false); };

  return (
    <details onMouseEnter={handleMouseEnter} open={isOpen}>
      <summary className={`${summaryClasses} pointer-events-none pr-0 text-lg py-0`}><span>{title}</span></summary>
      <ul className="rounded-2xl shadow-xl backdrop-blur-lg bg-base-300/15" onMouseLeave={handleSubMenuMouseLeave}>
        {links.map(({ to, label }) => (
          <li key={to} className="py-2"><NavLinkItem to={to} isActive={false}>{label}</NavLinkItem></li>
        ))}
      </ul>
    </details>
  );
}


function SubMenuMobile({ title, links, location }) {
  const summaryClasses = 'text-lg rounded-lg bg-clip-text text-transparent bg-gradient-to-r from-info to-accent font-bold cursor-pointer text-xl';

  return (
    <details className="group">
      <summary className="text-info"><a className={summaryClasses}>{title}</a></summary>
      <ul className="mt-2 mb-4 space-y-2 text-right">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={`font-bold text-info ${location.pathname.startsWith(to) ? "text-shadow-accent/50 text-shadow-md" : ""}`}>
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
      <ButtonPrimary text='Увійти' size="sm" rounded={ isMobile ? "none" : "full" } isFullWidth={ isMobile } isScript={ !isMobile }/>
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
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-xs backdrop-blur-lg bg-gradient-to-b from-base-100/20 via-base-200/15 to-base-300/10 py-1">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full flex justify-between items-center px-2">
          <div className="navbar-start">
            <Link to="/" className="text-xl font-extrabold font-secondary-2 text-shadow-2xs text-shadow-base-100/12 bg-gradient-to-r from-accent to-info bg-clip-text text-transparent uppercase">Розуміти</Link>
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
        <div className="md:hidden pt-1 fixed top-12 left-0 right-0 z-40 bg-gradient-to-b from-base-300/5 to-base-100/35 backdrop-blur-lg shadow-xl">
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
