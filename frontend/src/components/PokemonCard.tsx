import React from 'react';
import { Box, Typography, Paper, Avatar, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteButton from './FavoriteButton';

const CardContainer = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%)',
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  border: '2px solid #E0E0E0',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
    border: `2px solid ${theme.palette.primary.main}`
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px'
  }
}));

const PokemonImage = styled(Avatar)(({ theme }) => ({
  width: '120px',
  height: '120px',
  margin: '0 auto 16px auto',
  background: 'linear-gradient(145deg, #F0F0F0 0%, #E0E0E0 100%)',
  border: '3px solid #FFFFFF',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  '& img': {
    imageRendering: 'pixelated',
    transform: 'scale(1.2)'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px'
  }
}));

const PokemonName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  textAlign: 'center',
  color: theme.palette.text.primary,
  marginBottom: '16px',
  textTransform: 'capitalize',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem'
  }
}));

const InfoSection = styled(Box)(({ theme }) => ({
  marginBottom: '16px'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
}));

const TypeChip = styled(Chip)(({ theme, typeColor }) => ({
  background: typeColor || theme.palette.primary.main,
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '0.9rem',
  margin: '2px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const StatChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(145deg, #E3F2FD 0%, #BBDEFB 100%)',
  color: theme.palette.primary.dark,
  fontWeight: 600,
  fontSize: '0.85rem',
  margin: '2px',
  border: `1px solid ${theme.palette.primary.light}`
}));

const EvolutionChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(145deg, #F3E5F5 0%, #E1BEE7 100%)',
  color: '#7B1FA2',
  fontWeight: 600,
  fontSize: '0.9rem',
  margin: '2px',
  border: '1px solid #CE93D8',
  cursor: 'pointer',
  '&:hover': {
    background: 'linear-gradient(145deg, #E1BEE7 0%, #F3E5F5 100%)',
    transform: 'scale(1.05)'
  }
}));

// Cores para tipos de Pokémon
const typeColors: Record<string, string> = {
  'Normal': '#A8A878',
  'Fogo': '#F08030',
  'Água': '#6890F0',
  'Elétrico': '#F8D030',
  'Planta': '#78C850',
  'Gelo': '#98D8D8',
  'Lutador': '#C03028',
  'Venenoso': '#A040A0',
  'Terra': '#E0C068',
  'Voador': '#A890F0',
  'Psíquico': '#F85888',
  'Inseto': '#A8B820',
  'Pedra': '#B8A038',
  'Fantasma': '#705898',
  'Dragão': '#7038F8',
  'Sombrio': '#705848',
  'Metálico': '#B8B8D0',
  'Fada': '#EE99AC'
};

interface PokemonCardProps {
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

export default function PokemonCard({ pokemon, onFavoriteChange }: PokemonCardProps) {
  return (
    <CardContainer elevation={3}>
      <FavoriteButton pokemon={pokemon} onFavoriteChange={onFavoriteChange} />
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      
      <PokemonName variant="h2">
        {pokemon.name}
      </PokemonName>

      <InfoSection>
        <SectionTitle>Tipos</SectionTitle>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
          {pokemon.types.map((type, index) => (
            <TypeChip
              key={index}
              label={type}
              typeColor={typeColors[type]}
              size="small"
            />
          ))}
        </Stack>
      </InfoSection>

      <InfoSection>
        <SectionTitle>Fraquezas</SectionTitle>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
          {pokemon.fraquezas.map((fraqueza, index) => (
            <TypeChip
              key={index}
              label={fraqueza}
              typeColor={typeColors[fraqueza]}
              size="small"
            />
          ))}
        </Stack>
      </InfoSection>

      <InfoSection>
        <SectionTitle>Evoluções</SectionTitle>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
          {pokemon.evolucoes.map((evolucao, index) => (
            <EvolutionChip
              key={index}
              label={evolucao}
              size="small"
            />
          ))}
        </Stack>
      </InfoSection>

      <InfoSection>
        <SectionTitle>Estatísticas</SectionTitle>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
          {Object.entries(pokemon.stats).map(([stat, value]) => (
            <StatChip
              key={stat}
              label={`${stat}: ${value}`}
              size="small"
            />
          ))}
        </Stack>
      </InfoSection>
    </CardContainer>
  );
}