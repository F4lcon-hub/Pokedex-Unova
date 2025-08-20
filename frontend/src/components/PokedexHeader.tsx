import React from 'react';
import { Box, Typography, IconButton, Stack, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeaderContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  padding: '16px 24px',
  borderRadius: '16px 16px 0 0',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(220, 20, 60, 0.2)',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '12px 16px'
  }
}));

const PokedexLogo = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.8rem',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  letterSpacing: '0.1em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem'
  }
}));

const StatusIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  right: '24px',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    right: '16px',
    top: '10px'
  }
}));

const StatusLight = styled(Box)<{ color: string }>(({ theme, color }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: color,
  boxShadow: `0 0 8px ${color}`,
  animation: 'pulse 2s infinite'
}));

const NavigationDots = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: '12px',
  left: '24px',
  direction: 'row',
  gap: '6px',
  [theme.breakpoints.down('sm')]: {
    left: '16px',
    top: '10px'
  }
}));

const NavDot = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.6)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.9)',
    transform: 'scale(1.2)'
  }
}));

const FavoritesButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: '-12px',
  right: '24px',
  background: '#FFFFFF',
  color: theme.palette.primary.main,
  width: '36px',
  height: '36px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  border: `2px solid ${theme.palette.primary.main}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.primary.main,
    color: '#FFFFFF',
    transform: 'scale(1.1)',
    boxShadow: '0 6px 16px rgba(220, 20, 60, 0.3)'
  },
  [theme.breakpoints.down('sm')]: {
    right: '16px',
    width: '32px',
    height: '32px'
  }
}));

interface PokedexHeaderProps {
  title?: string;
  onFavoritesClick?: () => void;
  favoritesCount?: number;
}

export default function PokedexHeader({ 
  title = "POKÉDX", 
  onFavoritesClick,
  favoritesCount = 0 
}: PokedexHeaderProps) {
  return (
    <HeaderContainer>
      <NavigationDots direction="row" spacing={0.75}>
        <NavDot />
        <NavDot />
        <NavDot />
      </NavigationDots>
      
      <PokedexLogo variant="h1">
        {title}
      </PokedexLogo>
      
      <StatusIndicator>
        <StatusLight color="#4CAF50" />
        <StatusLight color="#FF9800" />
        <StatusLight color="#2196F3" />
      </StatusIndicator>

      {onFavoritesClick && (
        <Tooltip title={`Favoritos (${favoritesCount})`} placement="left">
          <FavoritesButton onClick={onFavoritesClick}>
            <FavoriteIcon fontSize="small" />
            {favoritesCount > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'error.main',
                  color: 'white',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}
              >
                {favoritesCount > 99 ? '99+' : favoritesCount}
              </Box>
            )}
          </FavoritesButton>
        </Tooltip>
      )}
      
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </HeaderContainer>
  );
}