import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const EvolutionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(180deg, #e3eaf6 0%, #3a5da8 100%)',
  color: '#fff',
  border: '2px solid #2c4377',
  borderRadius: '12px',
  padding: '6px 18px',
  margin: '4px 0',
  fontWeight: 'bold',
  boxShadow: '0 2px 8px rgba(58,93,168,0.15)',
  '&:hover': {
    background: 'linear-gradient(180deg, #3a5da8 0%, #e3eaf6 100%)',
    color: '#e3eaf6',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4px 12px',
    fontSize: '0.9em',
  },
}));

interface EvolutionDisplayProps {
  evolucoes: string[];
}

export default function EvolutionDisplay({ evolucoes }: EvolutionDisplayProps) {
  return (
    <Box sx={{ marginBottom: '8px' }}>
      <Typography sx={{ color: '#2c4377', fontWeight: 'bold', marginBottom: '8px' }}>
        <strong>Evoluções:</strong>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {evolucoes.map((evo, index) => (
          <EvolutionButton key={index} size="small">
            {evo}
          </EvolutionButton>
        ))}
      </Box>
    </Box>
  );
}