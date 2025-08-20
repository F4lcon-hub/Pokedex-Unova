import React from 'react';
import { Box, Typography, Avatar, Paper, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { pokedexTheme } from '../theme/pokedexTheme';
import PokedexDevice from './PokedexDevice';
import PokedexHeader from './PokedexHeader';

const ChefCard = styled(Paper)(({ theme, borderColor, backgroundColor }) => ({
  background: backgroundColor || 'linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%)',
  borderRadius: '16px',
  padding: '16px',
  textAlign: 'center',
  minWidth: '140px',
  maxWidth: '160px',
  border: `3px solid ${borderColor || theme.palette.primary.main}`,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '120px',
    maxWidth: '140px',
    padding: '12px'
  }
}));

const ChefAvatar = styled(Avatar)(({ theme }) => ({
  width: '60px',
  height: '60px',
  margin: '0 auto 12px auto',
  border: '2px solid #FFFFFF',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px'
  }
}));

const ChefName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  marginBottom: '4px',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem'
  }
}));

const ChefType = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  fontWeight: 500,
  marginBottom: '4px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
}));

const ChefLocation = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem'
  }
}));

const ChefesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  justifyContent: 'center',
  maxHeight: '300px',
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

export default function ChefesPreview() {
  const chefes = [
    {
      name: 'Cilan',
      type: 'Tipo Planta',
      location: 'Striaton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/cilan.png',
      borderColor: '#78C850',
      backgroundColor: '#e6f7e6'
    },
    {
      name: 'Chili',
      type: 'Tipo Fogo',
      location: 'Striaton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/chili.png',
      borderColor: '#F08030',
      backgroundColor: '#fff2e6'
    },
    {
      name: 'Cress',
      type: 'Tipo Água',
      location: 'Striaton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/cress.png',
      borderColor: '#6890F0',
      backgroundColor: '#e6f2ff'
    },
    {
      name: 'Lenora',
      type: 'Tipo Normal',
      location: 'Nacrene',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/lenora.png',
      borderColor: '#A8A878',
      backgroundColor: '#f7f7e6'
    },
    {
      name: 'Burgh',
      type: 'Tipo Inseto',
      location: 'Castelia',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/burgh.png',
      borderColor: '#A8B820',
      backgroundColor: '#f6fbe6'
    },
    {
      name: 'Elesa',
      type: 'Tipo Elétrico',
      location: 'Nimbasa',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/elesa.png',
      borderColor: '#F8D030',
      backgroundColor: '#fffbe6'
    },
    {
      name: 'Clay',
      type: 'Tipo Terra',
      location: 'Driftveil',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/clay.png',
      borderColor: '#E0C068',
      backgroundColor: '#f9f6e6'
    },
    {
      name: 'Skyla',
      type: 'Tipo Voador',
      location: 'Mistralton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/skyla.png',
      borderColor: '#A890F0',
      backgroundColor: '#f2f2ff'
    }
  ];

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
          <PokedexHeader title="LÍDERES DE GINÁSIO" />
          
          <Typography variant="h3" sx={{ 
            textAlign: 'center', 
            marginBottom: '16px',
            color: 'text.primary',
            fontSize: '1.2rem',
            fontWeight: 600
          }}>
            Região de Unova
          </Typography>
          
          <ChefesGrid>
            {chefes.map((chefe, index) => (
              <ChefCard 
                key={index}
                borderColor={chefe.borderColor}
                backgroundColor={chefe.backgroundColor}
              >
                <ChefAvatar src={chefe.image} alt={chefe.name} />
                <ChefName>{chefe.name}</ChefName>
                <ChefType>{chefe.type}</ChefType>
                <ChefLocation>{chefe.location}</ChefLocation>
              </ChefCard>
            ))}
          </ChefesGrid>
        </PokedexDevice>
      </Box>
    </ThemeProvider>
  );
}