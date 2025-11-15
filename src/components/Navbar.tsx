// src/components/Navbar.tsx
import React from "react";
import type { Section } from "../types/sections";

interface NavbarProps {
  currentSection: Section;
  onChangeSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onChangeSection }) => {
  const baseLinkClasses =
    "px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition";
  const activeClasses = "bg-white text-blue-600 shadow";
  const inactiveClasses = "text-white hover:bg-white/10";

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nombre + Carnet */}
          <div className="flex items-center gap-3">
            {/* Pon tu logo en /public/logo.png o cambia la ruta */}
            <img
              src="/logo.png"
              alt="Logo Universidad"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm sm:text-base">
                Wayner Alberto López y López
              </span>
              <span className="text-xs sm:text-sm text-blue-100">
                Carnet: 1790-14-11226
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2">
            <button
              onClick={() => onChangeSection("inicio")}
              className={`${baseLinkClasses} ${
                currentSection === "inicio" ? activeClasses : inactiveClasses
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => onChangeSection("acerca")}
              className={`${baseLinkClasses} ${
                currentSection === "acerca" ? activeClasses : inactiveClasses
              }`}
            >
              Acerca de
            </button>
            <button
              onClick={() => onChangeSection("api")}
              className={`${baseLinkClasses} ${
                currentSection === "api" ? activeClasses : inactiveClasses
              }`}
            >
              Consumo de API
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
