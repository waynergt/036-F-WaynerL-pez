# 🍸 Parcial Final – Desarrollo Web  
Aplicación SPA desarrollada con **Vite + React + TypeScript + TailwindCSS**, como parte del examen final del curso de Desarrollo Web.  
Incluye navegación por secciones, consumo de API real y despliegue en Vercel.

---

## 🚀 Demo en Producción

🔗 **Sitio desplegado:**  
https://036-f-wayner-l-pez.vercel.app/

🔗 **Repositorio GitHub:**  
https://github.com/waynergt/036-F-WaynerL-pez

---

## 📌 Descripción del Proyecto

Esta aplicación es una **SPA (Single Page Application)** construida sin react-router, utilizando únicamente el manejo de estado de React para cambiar entre las secciones:

- **Inicio**
- **Acerca de**
- **Consumo de API**

En la sección de **Consumo de API**, se consumen datos reales desde  
👉 **TheCocktailDB** utilizando dos endpoints públicos:

- `/filter.php?c=Ordinary_Drink` → Lista de tragos  
- `/lookup.php?i=ID` → Detalle de cada trago

Se muestran al menos **15 tragos en tarjetas**, y al hacer clic sobre uno se despliega un **modal** con información detallada como:

- Categoría  
- Tipo de vaso  
- Instrucciones  
- Imagen en alta calidad  

Este proyecto demuestra habilidades modernas de frontend y el uso de componentes reutilizables, manejo de estado, diseño responsive y consumo de APIs.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|------|
| **React 19** | Librería principal |
| **Vite 5** | Herramienta de construcción ultra rápida |
| **TypeScript** | Tipado estático |
| **TailwindCSS** | Estilos modernos y responsive |
| **TheCocktailDB API** | Fuente de datos |
| **Vercel** | Despliegue del proyecto |

---

## 📂 Estructura del Proyecto

```bash
src/
 ├── components/
 │   ├── Navbar.tsx
 │   └── CocktailGrid.tsx
 ├── services/
 │   └── cocktailApi.ts
 ├── types/
 │   └── sections.ts
 ├── App.tsx
 ├── main.tsx
 └── index.css
