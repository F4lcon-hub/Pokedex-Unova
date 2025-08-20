import React from 'react';
import { Box, Container, Typography, Card, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChiefCard = styled(Card)(({ theme, borderColor, backgroundColor }) => ({
  background: backgroundColor || '#f8fafc',
  borderRadius: '14px',
  boxShadow: '0 2px 12px rgba(58,93,168,0.10)',
  padding: '18px 24px',
  minWidth: '220px',
  maxWidth: '260px',
  textAlign: 'center',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  fontWeight: 'bold',
  marginBottom: '12px',
  border: `3px solid ${borderColor || '#3a5da8'}`,
  [theme.breakpoints.down('md')]: {
    minWidth: '180px',
    maxWidth: '200px',
    padding: '14px 18px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '140px',
    maxWidth: '160px',
    padding: '12px 14px',
  },
}));

const ChiefImage = styled('img')(({ theme }) => ({
  width: '64px',
  height: '64px',
  marginBottom: '8px',
  [theme.breakpoints.down('md')]: {
    width: '56px',
    height: '56px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '48px',
    height: '48px',
    marginBottom: '6px',
  },
}));

const ChiefTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2em',
  marginBottom: '8px',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    marginBottom: '6px',
  },
}));

const ChiefType = styled(Typography)(({ theme }) => ({
  fontSize: '1em',
  fontWeight: 'normal',
  color: '#2c4377',
  marginBottom: '6px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9em',
    marginBottom: '4px',
  },
}));

const ChiefLocation = styled(Typography)(({ theme }) => ({
  fontSize: '0.9em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8em',
  },
}));

export default function ChefesPreview() {
  const chefes = [
    {
      name: 'Cilan',
      type: 'Tipo Planta',
      location: 'Líder do Ginásio de Striaton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/cilan.png',
      borderColor: '#78C850',
      backgroundColor: '#e6f7e6'
    },
    {
      name: 'Chili',
      type: 'Tipo Fogo',
      location: 'Líder do Ginásio de Striaton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/chili.png',
      borderColor: '#F08030',
      backgroundColor: '#fff2e6'
    },
    {
      name: 'Cress',
      type: 'Tipo Água',
      location: 'Líder do Ginásio de Striaton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/cress.png',
      borderColor: '#6890F0',
      backgroundColor: '#e6f2ff'
    },
    {
      name: 'Lenora',
      type: 'Tipo Normal',
      location: 'Ginásio de Nacrene',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/lenora.png',
      borderColor: '#A8A878',
      backgroundColor: '#f7f7e6'
    },
    {
      name: 'Burgh',
      type: 'Tipo Inseto',
      location: 'Ginásio de Castelia',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/burgh.png',
      borderColor: '#A8B820',
      backgroundColor: '#f6fbe6'
    },
    {
      name: 'Elesa',
      type: 'Tipo Elétrico',
      location: 'Ginásio de Nimbasa',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/elesa.png',
      borderColor: '#F8D030',
      backgroundColor: '#fffbe6'
    },
    {
      name: 'Clay',
      type: 'Tipo Terra',
      location: 'Ginásio de Driftveil',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/clay.png',
      borderColor: '#E0C068',
      backgroundColor: '#f9f6e6'
    },
    {
      name: 'Skyla',
      type: 'Tipo Voador',
      location: 'Ginásio de Mistralton',
      image: 'https://play.pokemonshowdown.com/sprites/trainers/skyla.png',
      borderColor: '#A890F0',
      backgroundColor: '#f2f2ff'
    }
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #b7e0f7 0%, #3a5da8 100%)',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Arial, sans-serif'
    }}>
      <Box sx={{ 
        background: 'linear-gradient(90deg, #e3eaf6 0%, #3a5da8 100%)',
        padding: '18px 0',
        textAlign: 'center',
        borderBottom: '3px solid #3a5da8',
        boxShadow: '0 2px 8px rgba(58,93,168,0.10)'
      }}>
        <Typography variant="h1" sx={{
          fontFamily: 'Segoe UI, Arial, sans-serif',
          color: '#3a5da8',
          fontSize: { xs: '1.6em', sm: '1.8em', md: '2.1em' },
          letterSpacing: { xs: '1px', md: '3px' },
          margin: 0,
          textShadow: '1px 1px 0 #fff, 2px 2px 0 #b7e0f7'
        }}>
          Pokédex Unova
        </Typography>
      </Box>

      <Container sx={{
        maxWidth: '420px',
        margin: '60px auto',
        background: '#f8fafc',
        padding: { xs: '16px', sm: '20px', md: '32px' },
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(58,93,168,0.15)',
        border: '2px solid #3a5da8'
      }}>
        <Typography variant="h2" sx={{ 
          color: '#3a5da8', 
          textAlign: 'center', 
          fontWeight: 'bold',
          fontSize: { xs: '1.4em', md: '1.6em' },
          marginBottom: '16px'
        }}>
          Chefes dos Jogos da Região de Unova
        </Typography>
        
        <Typography sx={{ 
          textAlign: 'center', 
          color: '#2c4377', 
          marginBottom: '24px',
          fontSize: '1.1em'
        }}>
          Conheça os líderes de ginásio e campeões dos jogos Pokémon Black, White, Black 2 e White 2!
        </Typography>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: '8px', sm: '12px', md: '18px' },
          justifyContent: 'center',
          marginTop: '24px',
          padding: { xs: '0 10px', md: 0 }
        }}>
          {chefes.map((chefe, index) => (
            <ChiefCard 
              key={index}
              borderColor={chefe.borderColor}
              backgroundColor={chefe.backgroundColor}
            >
              <ChiefImage src={chefe.image} alt={chefe.name} />
              <ChiefTitle>{chefe.name}</ChiefTitle>
              <ChiefType>{chefe.type}</ChiefType>
              <ChiefLocation>{chefe.location}</ChiefLocation>
            </ChiefCard>
          ))}
        </Box>

        <Typography sx={{ 
          marginTop: '24px', 
          textAlign: 'center', 
          color: '#2c4377',
          fontSize: '1.1em'
        }}>
          Cada chefe possui uma equipe única e representa um desafio especial para os treinadores em Unova!
        </Typography>
      </Container>

      <Box sx={{ 
        background: 'linear-gradient(90deg, #3a5da8 0%, #e3eaf6 100%)',
        padding: '14px 0',
        textAlign: 'center',
        borderTop: '3px solid #3a5da8',
        boxShadow: '0 -2px 8px rgba(58,93,168,0.10)'
      }}>
        <Typography sx={{
          fontFamily: 'Segoe UI, Arial, sans-serif',
          color: '#2c4377',
          fontSize: '1em',
          margin: 0,
          letterSpacing: '1px'
        }}>
          Desenvolvido por Falcon © 2025 | Inspirado na região de Unova
        </Typography>
      </Box>
    </Box>
  );
}