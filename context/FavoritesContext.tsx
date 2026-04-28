import { PRODUCTS } from '@/data/products';
import React, { createContext, useContext, useMemo, useState } from 'react';

type FavoritesContextValue = {
  favorites: string[];
  favoriteProducts: typeof PRODUCTS;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const favoriteProducts = useMemo(
    () => PRODUCTS.filter((product) => favorites.includes(product.id)),
    [favorites],
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, favoriteProducts, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
}
