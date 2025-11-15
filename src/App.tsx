// src/App.tsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CocktailGrid from "./components/CocktailGrid";
import type { Section } from "./types/sections";

const App: React.FC = () => {
  const [section, setSection] = useState<Section>("inicio");

  const renderContent = () => {
    switch (section) {
      case "inicio":
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-linear-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">

        {/* Logo principal */}
        <div className="flex justify-center mb-6">
          {/* Cambia /logo.png por tu logo real */}
          <img
            src="/logo.png"
            alt="Logo Universidad"
            className="h-28 w-28 object-cover rounded-full shadow-md"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
          Bienvenido a mi Parcial Final
        </h1>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Nombre:</span> Wayner Alberto López y López
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Carnet:</span> 1790-14-11226
        </p>

        {/* Logos de tecnologías */}
        <p className="text-gray-600 mb-3 font-semibold">
          Tecnologías utilizadas:
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap mb-6">

          {/* React */}
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt="React Logo"
            className="h-10 sm:h-12"
          />

          {/* Vite */}
          <img
            src="https://vitejs.dev/logo.svg"
            alt="Vite Logo"
            className="h-10 sm:h-12"
          />

          {/* TypeScript */}
          <img
            src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
            alt="TypeScript Logo"
            className="h-10 sm:h-12"
          />

          {/* Tailwind */}
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="Tailwind Logo"
            className="h-10 sm:h-12"
          />

        </div>

        <p className="text-gray-600">
          Navega por las secciones superiores para ver{" "}
          <span className="font-semibold">Acerca de</span> y{" "}
          <span className="font-semibold">Consumo de API</span>.
        </p>
      </div>
    </section>
  );


      case "acerca":
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-10 flex justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
          Acerca de este Proyecto
        </h2>

        <p className="text-slate-700 mb-4 leading-relaxed">
          Esta aplicación fue desarrollada como parte del examen final del curso
          de <span className="font-semibold">Desarrollo Web</span>. El objetivo
          principal es demostrar el dominio de tecnologías modernas de frontend mediante la
          creación de una aplicación tipo{" "}
          <span className="font-semibold">SPA (Single Page Application)</span>,
          utilizando <span className="font-semibold">Vite, React, TypeScript</span> y{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        <p className="text-slate-700 mb-4 leading-relaxed">
          El proyecto implementa una navegación fluida entre las distintas secciones de
          <span className="font-semibold"> Inicio, Acerca de y Consumo de API</span>,
          sin recargar la página. Esto se logra mediante el uso de manejo de estado en React.
          Además, incluye el consumo de la API pública{" "}
          <span className="font-semibold">TheCocktailDB</span>, mostrando al menos
          15 elementos en formato de tarjetas. Al seleccionar un trago, se despliega
          un modal con el detalle completo, cumpliendo con los requisitos solicitados
          en el examen final.
        </p>

        <p className="text-slate-700 mb-4 leading-relaxed">
          Este proyecto aplica conocimientos clave como:
        </p>

        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
          <li>Creación y reutilización de componentes en React</li>
          <li>Manejo de estado y renderizado condicional</li>
          <li>Consumo de APIs mediante <code>fetch</code></li>
          <li>Diseño responsivo y estético con Tailwind CSS</li>
          <li>Organización y tipado con TypeScript</li>
          <li>Estructuración de una SPA moderna desde cero</li>
        </ul>

        <p className="text-slate-700 leading-relaxed">
          En resumen, esta aplicación representa la integración práctica de los
          conocimientos adquiridos durante el curso, reflejando habilidades de desarrollo web
          modernas y preparación para entornos reales de programación.
        </p>
      </div>
    </section>
  );


      case "api":
        // Aquí usamos el componente de consumo de API
        return <CocktailGrid />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentSection={section} onChangeSection={setSection} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

export default App;
