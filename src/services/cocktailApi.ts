// src/services/cocktailApi.ts

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface CocktailDetail extends Cocktail {
  strCategory?: string;
  strGlass?: string;
  strInstructions?: string;
}

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

/**
 * Obtiene la lista de tragos tipo "Ordinary_Drink"
 */
export async function fetchOrdinaryDrinks(): Promise<Cocktail[]> {
  const res = await fetch(`${BASE_URL}/filter.php?c=Ordinary_Drink`);

  if (!res.ok) {
    throw new Error("Error al cargar las bebidas");
  }

  const data = await res.json();
  return data.drinks ?? [];
}

/**
 * Obtiene el detalle de un trago por idDrink
 */
export async function fetchCocktailDetail(
  idDrink: string
): Promise<CocktailDetail | null> {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${idDrink}`);

  if (!res.ok) {
    throw new Error("Error al cargar el detalle");
  }

  const data = await res.json();
  const drink = data.drinks?.[0];
  return drink ?? null;
}
