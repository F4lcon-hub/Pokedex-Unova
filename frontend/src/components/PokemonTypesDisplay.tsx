import React from 'react';
import { Box, Typography } from '@mui/material';

interface PokemonTypesDisplayProps {
  types: string[];
  fraquezas: string[];
}

export default function PokemonTypesDisplay({ types, fraquezas }: PokemonTypesDisplayProps) {
  return (
    <Box sx={{ marginBottom: '8px' }}>
      <Typography sx={{ color: '#2c4377', fontWeight: 'bold' }}>
        <strong>Tipos:</strong> {types.join(', ')}
      </Typography>
      <Typography sx={{ color: '#2c4377', fontWeight: 'bold' }}>
        <strong>Fraquezas:</strong> {fraquezas.join(', ')}
      </Typography>
    </Box>
  );
}