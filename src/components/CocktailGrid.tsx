// src/components/CocktailGrid.tsx
import React, { useEffect, useState } from "react";
import {
  fetchOrdinaryDrinks,
  fetchCocktailDetail,
  type Cocktail,
  type CocktailDetail,
} from "../services/cocktailApi";

const CocktailGrid: React.FC = () => {
  // Lista principal
  const [drinks, setDrinks] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estado para el modal
  const [selected, setSelected] = useState<Cocktail | null>(null);
  const [detail, setDetail] = useState<CocktailDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar lista de tragos al entrar a esta sección
  useEffect(() => {
    const loadDrinks = async () => {
      try {
        const list = await fetchOrdinaryDrinks();
        // Mostramos mínimo 15 elementos
        setDrinks(list.slice(0, 15));
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las bebidas.");
      } finally {
        setLoading(false);
      }
    };

    loadDrinks();
  }, []);

  const handleOpenDetail = async (drink: Cocktail) => {
    setSelected(drink);
    setIsModalOpen(true);
    setDetail(null);
    setDetailError(null);
    setDetailLoading(true);

    try {
      const full = await fetchCocktailDetail(drink.idDrink);
      if (full) {
        setDetail(full);
      } else {
        setDetailError("No se encontró el detalle de la bebida.");
      }
    } catch (err) {
      console.error(err);
      setDetailError("Error al cargar el detalle.");
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelected(null);
    setDetail(null);
    setDetailError(null);
  };

  if (loading) {
    return (
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50">
        <p className="text-slate-600 text-lg">Cargando bebidas...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-red-50">
        <p className="text-red-700 font-semibold">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-8 flex justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
          Consumo de API – Ordinary Drinks
        </h1>

        {/* Descripción simplificada */}
        <p className="text-slate-600 mb-4">
          Datos obtenidos desde{" "}
          <span className="font-semibold">TheCocktailDB</span> usando React.
        </p>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {drinks.map((drink) => (
            <button
              key={drink.idDrink}
              onClick={() => handleOpenDetail(drink)}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col text-left"
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="h-32 w-full object-cover"
              />
              <div className="p-2 flex-1 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-semibold text-slate-800 text-center">
                  {drink.strDrink}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* MODAL DE DETALLE */}
        {isModalOpen && selected && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl overflow-hidden">
              {/* Encabezado */}
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <h2 className="font-bold text-lg text-slate-800">
                  {detail?.strDrink ?? selected.strDrink}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-slate-500 hover:text-slate-800 text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <img
                  src={detail?.strDrinkThumb ?? selected.strDrinkThumb}
                  alt={detail?.strDrink ?? selected.strDrink}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />

                {detailLoading && (
                  <p className="text-slate-600">Cargando detalle...</p>
                )}

                {detailError && (
                  <p className="text-red-600 font-semibold">{detailError}</p>
                )}

                {!detailLoading && !detailError && (
                  <>
                    <p className="mb-1">
                      <span className="font-semibold">Categoría: </span>
                      {detail?.strCategory ?? "No disponible"}
                    </p>
                    <p className="mb-3">
                      <span className="font-semibold">Cristal: </span>
                      {detail?.strGlass ?? "No disponible"}
                    </p>
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">Instrucciones: </span>
                      {detail?.strInstructions ??
                        "No hay instrucciones disponibles."}
                    </p>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CocktailGrid;
