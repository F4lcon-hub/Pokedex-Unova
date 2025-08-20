import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoritesManager, FavoritePokemon } from '../utils/favoritesManager';
import PokemonCard from './PokemonCard';

const FavoritesContainer = styled(Box)(({ theme }) => ({
  maxHeight: '400px',
  overflowY: 'auto',
  padding: '8px',
  '&::-webkit-scrollbar': {
    width: '6px'
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '3px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '3px'
  }
}));

const EmptyState = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '40px 20px',
  color: theme.palette.text.secondary
}));

const FavoriteItem = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%)',
  borderRadius: '12px',
  padding: '12px',
  marginBottom: '8px',
  border: '1px solid #E0E0E0',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateX(4px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${theme.palette.primary.main}`
  }
}));

const PokemonAvatar = styled('img')(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '8px',
  background: '#F0F0F0',
  imageRendering: 'pixelated'
}));

const PokemonInfo = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0
}));

const PokemonName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  color: theme.palette.text.primary,
  textTransform: 'capitalize',
  marginBottom: '2px'
}));

const PokemonTypes = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  width: '32px',
  height: '32px',
  color: theme.palette.error.main,
  '&:hover': {
    background: theme.palette.error.light,
    color: '#FFFFFF'
  }
}));

const HeaderActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px'
}));

const FavoritesTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.2rem',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}));

const ClearAllButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
  '&:hover': {
    background: theme.palette.error.light,
    color: '#FFFFFF'
  }
}));

interface FavoritesViewProps {
  onPokemonSelect?: (pokemon: FavoritePokemon) => void;
}

export default function FavoritesView({ onPokemonSelect }: FavoritesViewProps) {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<FavoritePokemon | null>(null);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const favs = FavoritesManager.getFavoritesSorted();
    setFavorites(favs);
  };

  const handleRemoveFavorite = (pokemonName: string, event: React.MouseEvent) => {
    event.stopPropagation();
    FavoritesManager.removeFavorite(pokemonName);
    loadFavorites();
    
    // Se o Pokemon removido estava selecionado, limpar seleção
    if (selectedPokemon?.name === pokemonName) {
      setSelectedPokemon(null);
    }
  };

  const handleClearAll = () => {
    FavoritesManager.clearFavorites();
    setFavorites([]);
    setSelectedPokemon(null);
  };

  const handlePokemonClick = (pokemon: FavoritePokemon) => {
    setSelectedPokemon(pokemon);
    onPokemonSelect?.(pokemon);
  };

  if (selectedPokemon) {
    return (
      <Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '16px' 
        }}>
          <Typography 
            variant="button" 
            sx={{ 
              cursor: 'pointer', 
              color: 'primary.main',
              '&:hover': { textDecoration: 'underline' }
            }}
            onClick={() => setSelectedPokemon(null)}
          >
            ← Voltar aos Favoritos
          </Typography>
        </Box>
        <PokemonCard pokemon={selectedPokemon} />
      </Box>
    );
  }

  return (
    <Box>
      <HeaderActions>
        <FavoritesTitle>
          <FavoriteIcon color="primary" />
          Favoritos ({favorites.length})
        </FavoritesTitle>
        
        {favorites.length > 0 && (
          <Tooltip title="Limpar todos os favoritos">
            <ClearAllButton onClick={handleClearAll} size="small">
              <DeleteIcon fontSize="small" />
            </ClearAllButton>
          </Tooltip>
        )}
      </HeaderActions>

      {favorites.length === 0 ? (
        <EmptyState>
          <FavoriteIcon sx={{ fontSize: '48px', opacity: 0.3, marginBottom: '16px' }} />
          <Typography variant="h6" sx={{ marginBottom: '8px' }}>
            Nenhum favorito ainda
          </Typography>
          <Typography variant="body2">
            Use o botão ❤️ nos Pokémon para adicioná-los aos seus favoritos!
          </Typography>
        </EmptyState>
      ) : (
        <FavoritesContainer>
          <Stack spacing={1}>
            {favorites.map((pokemon) => (
              <FavoriteItem 
                key={pokemon.id}
                onClick={() => handlePokemonClick(pokemon)}
              >
                <PokemonAvatar 
                  src={pokemon.image} 
                  alt={pokemon.name}
                />
                
                <PokemonInfo>
                  <PokemonName>{pokemon.name}</PokemonName>
                  <PokemonTypes>
                    {pokemon.types.join(', ')}
                  </PokemonTypes>
                </PokemonInfo>
                
                <ActionButton 
                  size="small"
                  onClick={(e) => handleRemoveFavorite(pokemon.name, e)}
                >
                  <DeleteIcon fontSize="small" />
                </ActionButton>
              </FavoriteItem>
            ))}
          </Stack>
        </FavoritesContainer>
      )}
    </Box>
  );
}