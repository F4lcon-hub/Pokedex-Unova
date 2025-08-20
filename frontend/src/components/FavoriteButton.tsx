import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoritesManager, FavoritePokemon } from '../utils/favoritesManager';

const StyledFavoriteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  border: '1px solid rgba(220, 20, 60, 0.2)',
  width: '40px',
  height: '40px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 1)',
    transform: 'scale(1.1)',
    boxShadow: '0 4px 12px rgba(220, 20, 60, 0.3)'
  },
  '&.favorited': {
    background: `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: '#FFFFFF',
    '&:hover': {
      background: `linear-gradient(145deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
    }
  }
}));

interface FavoriteButtonProps {
  pokemon: {
    name: string;
    image: string;
    types: string[];
    fraquezas: string[];
    evolucoes: string[];
    stats: Record<string, number>;
  };
  onFavoriteChange?: (isFavorite: boolean) => void;
}

export default function FavoriteButton({ pokemon, onFavoriteChange }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsFavorite(FavoritesManager.isFavorite(pokemon.name));
  }, [pokemon.name]);

  const handleToggleFavorite = () => {
    setIsAnimating(true);
    
    const newFavoriteStatus = !isFavorite;
    
    if (newFavoriteStatus) {
      // Adicionar aos favoritos
      const success = FavoritesManager.addFavorite({
        name: pokemon.name,
        image: pokemon.image,
        types: pokemon.types,
        fraquezas: pokemon.fraquezas,
        evolucoes: pokemon.evolucoes,
        stats: pokemon.stats
      });
      
      if (success) {
        setIsFavorite(true);
        onFavoriteChange?.(true);
      }
    } else {
      // Remover dos favoritos
      const success = FavoritesManager.removeFavorite(pokemon.name);
      
      if (success) {
        setIsFavorite(false);
        onFavoriteChange?.(false);
      }
    }

    // Reset animation
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Tooltip 
      title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      placement="left"
    >
      <StyledFavoriteButton
        onClick={handleToggleFavorite}
        className={isFavorite ? 'favorited' : ''}
        sx={{
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      >
        {isFavorite ? (
          <FavoriteIcon fontSize="medium" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        )}
      </StyledFavoriteButton>
    </Tooltip>
  );
}