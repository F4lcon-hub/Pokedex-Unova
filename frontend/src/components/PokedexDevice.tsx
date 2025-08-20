import React from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const PokedexBody = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  borderRadius: '24px',
  padding: '24px',
  position: 'relative',
  boxShadow: '0 20px 40px rgba(220, 20, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  border: '3px solid #B71C1C',
  maxWidth: '480px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '95vw',
    padding: '20px',
    borderRadius: '20px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    borderRadius: '16px'
  }
}));

const PokedexScreen = styled(Box)(({ theme }) => ({
  background: '#000000',
  borderRadius: '16px',
  padding: '4px',
  marginBottom: '20px',
  position: 'relative',
  boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.5)',
  border: '2px solid #333333',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    background: '#666666',
    borderRadius: '2px'
  }
}));

const ScreenContent = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(145deg, #E8F5E8 0%, #F0F8F0 100%)',
  borderRadius: '12px',
  minHeight: '400px',
  padding: '20px',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    minHeight: '350px',
    padding: '16px'
  }
}));

const ControlPanel = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '16px',
  gap: '12px'
}));

const PowerButton = styled(Box)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: `linear-gradient(145deg, #4CAF50 0%, #388E3C 100%)`,
  boxShadow: '0 2px 4px rgba(76, 175, 80, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  border: '1px solid #2E7D32',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 8px rgba(76, 175, 80, 0.4)'
  }
}));

const DirectionalPad = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplate: '1fr 1fr 1fr / 1fr 1fr 1fr',
  gap: '2px',
  width: '60px',
  height: '60px'
}));

const DPadButton = styled(Box)(({ theme }) => ({
  background: `linear-gradient(145deg, #666666 0%, #424242 100%)`,
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: '1px solid #333333',
  '&:hover': {
    background: `linear-gradient(145deg, #757575 0%, #515151 100%)`
  },
  '&:nth-of-type(2)': {
    borderRadius: '8px 8px 4px 4px'
  },
  '&:nth-of-type(4)': {
    borderRadius: '8px 4px 4px 8px'
  },
  '&:nth-of-type(6)': {
    borderRadius: '4px 8px 8px 4px'
  },
  '&:nth-of-type(8)': {
    borderRadius: '4px 4px 8px 8px'
  }
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '8px'
}));

const ActionButton = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: `linear-gradient(145deg, #1976D2 0%, #0D47A1 100%)`,
  boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  border: '1px solid #0D47A1',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  fontSize: '12px',
  fontWeight: 'bold',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(25, 118, 210, 0.4)'
  }
}));

interface PokedexDeviceProps {
  children: React.ReactNode;
}

export default function PokedexDevice({ children }: PokedexDeviceProps) {
  return (
    <PokedexBody elevation={6}>
      <PokedexScreen>
        <ScreenContent>
          {children}
        </ScreenContent>
      </PokedexScreen>
      
      <ControlPanel>
        <PowerButton />
        
        <DirectionalPad>
          <div />
          <DPadButton />
          <div />
          <DPadButton />
          <DPadButton />
          <DPadButton />
          <div />
          <DPadButton />
          <div />
        </DirectionalPad>
        
        <ActionButtons>
          <ActionButton>A</ActionButton>
          <ActionButton>B</ActionButton>
        </ActionButtons>
      </ControlPanel>
    </PokedexBody>
  );
}