import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

interface PokemonStatsDisplayProps {
  stats: Record<string, number>;
}

export default function PokemonStatsDisplay({ stats }: PokemonStatsDisplayProps) {
  return (
    <Box>
      <Typography sx={{ color: '#2c4377', fontWeight: 'bold', marginBottom: '8px' }}>
        <strong>Estatísticas:</strong>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {Object.entries(stats).map(([stat, valor]) => (
          <Chip 
            key={stat}
            label={`${stat}: ${valor}`}
            sx={{ 
              backgroundColor: '#3a5da8', 
              color: '#fff',
              fontSize: { xs: '0.9em', md: '1em' }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}