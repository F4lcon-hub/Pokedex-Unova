import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import GroupIcon from '@mui/icons-material/Group';
import { pokedexTheme } from './frontend/src/theme/pokedexTheme';
import PokedexPreview from './frontend/src/components/PokedexPreview';
import ChefesPreview from './frontend/src/components/ChefesPreview';

const FloatingControls = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '20px',
  right: '20px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  [theme.breakpoints.down('sm')]: {
    top: '16px',
    right: '16px',
    gap: '8px'
  }
}));

const ControlButton = styled(IconButton)(({ theme, active }) => ({
  width: '56px',
  height: '56px',
  background: active 
    ? `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
    : 'rgba(255, 255, 255, 0.9)',
  color: active ? '#FFFFFF' : theme.palette.primary.main,
  boxShadow: active 
    ? '0 4px 16px rgba(220, 20, 60, 0.4)'
    : '0 4px 12px rgba(0, 0, 0, 0.15)',
  border: `2px solid ${active ? theme.palette.primary.dark : 'transparent'}`,
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    background: active 
      ? `linear-gradient(145deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
      : `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: '#FFFFFF',
    boxShadow: '0 6px 20px rgba(220, 20, 60, 0.5)'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48px',
    height: '48px'
  }
}));

const StatusIndicator = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '16px',
  padding: '12px 16px',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(220, 20, 60, 0.2)',
  fontSize: '0.9rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  [theme.breakpoints.down('sm')]: {
    bottom: '16px',
    left: '16px',
    padding: '8px 12px',
    fontSize: '0.8rem'
  }
}));

const StatusDot = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: theme.palette.success.main,
  animation: 'pulse 2s infinite'
}));

export default function App() {
  const [currentView, setCurrentView] = useState<'pokedex' | 'chefes'>('pokedex');

  return (
    <ThemeProvider theme={pokedexTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <FloatingControls>
          <Tooltip title="Pokédex" placement="left">
            <ControlButton
              active={currentView === 'pokedex'}
              onClick={() => setCurrentView('pokedex')}
            >
              <CatchingPokemonIcon fontSize="large" />
            </ControlButton>
          </Tooltip>
          
          <Tooltip title="Líderes de Ginásio" placement="left">
            <ControlButton
              active={currentView === 'chefes'}
              onClick={() => setCurrentView('chefes')}
            >
              <GroupIcon fontSize="large" />
            </ControlButton>
          </Tooltip>
        </FloatingControls>

        {currentView === 'pokedex' && <PokedexPreview />}
        {currentView === 'chefes' && <ChefesPreview />}

        <StatusIndicator>
          <StatusDot />
          {currentView === 'pokedex' ? 'Pokédex com Favoritos' : 'Modo Líderes'}
        </StatusIndicator>
      </Box>
    </ThemeProvider>
  );
}