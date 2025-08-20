import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography } from '@mui/material';
import PokedexPreview from './src/components/PokedexPreview';
import ChefesPreview from './src/components/ChefesPreview';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3a5da8',
      light: '#b7e0f7',
      dark: '#2c4377',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#e3eaf6',
      light: '#f8fafc',
      dark: '#232a3a',
      contrastText: '#2c4377'
    },
    background: {
      default: '#f8fafc',
      paper: '#e3eaf6'
    },
    text: {
      primary: '#2c4377',
      secondary: '#232a3a'
    }
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    h1: {
      fontWeight: 'bold',
      letterSpacing: '2px'
    },
    h2: {
      fontWeight: 'bold',
      color: '#3a5da8'
    }
  },
  shape: {
    borderRadius: 12
  }
});

export default function App() {
  const [currentView, setCurrentView] = useState<'pokedex' | 'chefes'>('pokedex');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Box sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
          display: 'flex',
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' }
        }}>
          <Button
            variant={currentView === 'pokedex' ? 'contained' : 'outlined'}
            onClick={() => setCurrentView('pokedex')}
            sx={{ 
              backgroundColor: currentView === 'pokedex' ? '#3a5da8' : 'transparent',
              color: currentView === 'pokedex' ? '#fff' : '#3a5da8',
              borderColor: '#3a5da8',
              fontSize: { xs: '0.8em', sm: '0.9em' },
              padding: { xs: '4px 8px', sm: '6px 12px' }
            }}
          >
            Pokédex
          </Button>
          <Button
            variant={currentView === 'chefes' ? 'contained' : 'outlined'}
            onClick={() => setCurrentView('chefes')}
            sx={{ 
              backgroundColor: currentView === 'chefes' ? '#3a5da8' : 'transparent',
              color: currentView === 'chefes' ? '#fff' : '#3a5da8',
              borderColor: '#3a5da8',
              fontSize: { xs: '0.8em', sm: '0.9em' },
              padding: { xs: '4px 8px', sm: '6px 12px' }
            }}
          >
            Chefes
          </Button>
        </Box>

        {currentView === 'pokedex' && <PokedexPreview />}
        {currentView === 'chefes' && <ChefesPreview />}

        <Box sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          backgroundColor: 'rgba(58, 93, 168, 0.9)',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '0.8em',
          maxWidth: { xs: '200px', sm: '300px' }
        }}>
          <Typography variant="caption" sx={{ color: '#fff' }}>
            📱 Responsive Pokédex Preview
          </Typography>
          <br />
          <Typography variant="caption" sx={{ color: '#b7e0f7' }}>
            Resize window to test responsiveness
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}