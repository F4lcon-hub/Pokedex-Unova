import React from 'react';
import { Box, Container, Typography, Card, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import PokemonStatsDisplay from './PokemonStatsDisplay';
import PokemonTypesDisplay from './PokemonTypesDisplay';
import EvolutionDisplay from './EvolutionDisplay';

const PokedexContainer = styled(Container)(({ theme }) => ({
  maxWidth: '420px',
  margin: '60px auto',
  background: '#f8fafc',
  padding: '32px',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(58,93,168,0.15)',
  border: '2px solid #3a5da8',
  [theme.breakpoints.down('md')]: {
    maxWidth: '95vw',
    margin: '20px auto',
    padding: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    margin: '10px auto',
  },
}));

const PokemonCard = styled(Card)(({ theme }) => ({
  background: '#e3eaf6',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(58,93,168,0.12)',
  padding: '24px',
  margin: '0 auto 24px auto',
  maxWidth: '480px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    gap: '12px',
  },
}));

const PokeSprite = styled('img')(({ theme }) => ({
  width: '96px',
  height: '96px',
  imageRendering: 'pixelated',
  borderRadius: '12px',
  background: '#fff',
  border: '2px solid #3a5da8',
  [theme.breakpoints.down('sm')]: {
    width: '80px',
    height: '80px',
  },
}));

const SearchForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: '24px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '12px',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px',
    '& fieldset': {
      borderColor: '#3a5da8',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  background: '#3a5da8',
  color: '#fff',
  borderRadius: '6px',
  padding: '8px 16px',
  '&:hover': {
    background: '#2c4377',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '12px',
  },
}));

export default function PokedexPreview() {
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
        <Box sx={{ 
          marginTop: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          <Typography component="a" href="#" sx={{ color: '#2c4377', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Início
          </Typography>
          <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>|</Typography>
          <Typography component="a" href="#" sx={{ color: '#2c4377', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Chefes
          </Typography>
          <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>|</Typography>
          <Typography component="a" href="#" sx={{ color: '#2c4377', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Sobre
          </Typography>
          <Button sx={{
            marginLeft: { xs: 0, md: '16px' },
            marginTop: { xs: '8px', md: 0 },
            padding: { xs: '6px 12px', md: '6px 14px' },
            borderRadius: '8px',
            background: '#3a5da8',
            color: '#fff',
            border: 'none',
            fontWeight: 'bold',
            fontSize: { xs: '0.8em', md: '1em' }
          }}>
            🌙 Modo Escuro
          </Button>
        </Box>
      </Box>

      <PokedexContainer>
        <SearchForm>
          <Typography component="label" sx={{ color: '#2c4377', fontWeight: 'bold' }}>
            Buscar por nome ou número:
          </Typography>
          <StyledTextField
            placeholder="Ex: bulbasaur ou 1"
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1 }}
          />
          <SearchButton>
            Buscar
          </SearchButton>
        </SearchForm>

        <PokemonCard>
          <Typography variant="h2" sx={{ 
            textAlign: 'center', 
            color: '#2c4377', 
            fontSize: { xs: '1.4em', md: '1.6em' },
            marginBottom: '16px'
          }}>
            {mockPokemon.name}
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
            <PokeSprite src={mockPokemon.image} alt="Pokémon sprite" />
          </Box>

          <PokemonTypesDisplay 
            types={mockPokemon.types} 
            fraquezas={mockPokemon.fraquezas} 
          />

          <EvolutionDisplay evolucoes={mockPokemon.evolucoes} />

          <PokemonStatsDisplay stats={mockPokemon.stats} />
        </PokemonCard>
      </PokedexContainer>

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