import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { pokedexTheme } from '../theme/pokedexTheme';
import { FavoritesManager } from '../utils/favoritesManager';
import PokedexDevice from './PokedexDevice';
import PokedexHeader from './PokedexHeader';
import SearchBar from './SearchBar';
import PokemonCard from './PokemonCard';
import FavoritesView from './FavoritesView';

export default function PokedexPreview() {
  const [currentView, setCurrentView] = useState<'search' | 'favorites'>('search');
  const [favoritesCount, setFavoritesCount] = useState(0);

  const mockPokemon = {
    name: 'Pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    types: ['Elétrico'],
    fraquezas: ['Terra'],
    evolucoes: ['Pichu', 'Pikachu', 'Raichu'],
    stats: {
      'Vida': 35,
      'Ataque': 55,
      'Defesa': 40,
      'Ataque Especial': 50,
      'Defesa Especial': 50,
      'Velocidade': 90
    }
  };

  useEffect(() => {
    updateFavoritesCount();
  }, []);

  const updateFavoritesCount = () => {
    setFavoritesCount(FavoritesManager.getFavoritesCount());
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Aqui seria implementada a lógica de busca
  };

  const handleFavoritesClick = () => {
    setCurrentView(currentView === 'favorites' ? 'search' : 'favorites');
  };

  const handleFavoriteChange = (isFavorite: boolean) => {
    updateFavoritesCount();
  };

  return (
    <ThemeProvider theme={pokedexTheme}>
      <Box sx={{ 
        background: 'linear-gradient(135deg, #FFE0E6 0%, #FFCDD2 50%, #F8BBD9 100%)',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <PokedexDevice>
          <PokedexHeader 
            title={currentView === 'favorites' ? "FAVORITOS" : "POKÉDX UNOVA"}
            onFavoritesClick={handleFavoritesClick}
            favoritesCount={favoritesCount}
          />
          
          {currentView === 'search' ? (
            <>
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Digite o nome ou número do Pokémon..."
              />
              <PokemonCard 
                pokemon={mockPokemon} 
                onFavoriteChange={handleFavoriteChange}
              />
            </>
          ) : (
            <FavoritesView />
          )}
        </PokedexDevice>
      </Box>
    </ThemeProvider>
  );
}