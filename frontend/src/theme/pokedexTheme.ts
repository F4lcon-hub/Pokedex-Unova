import { createTheme } from '@mui/material/styles';

export const pokedexTheme = createTheme({
  palette: {
    primary: {
      main: '#DC143C', // Vermelho Pokédex clássico
      light: '#FF6B6B',
      dark: '#B71C1C',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#1976D2', // Azul para detalhes
      light: '#42A5F5',
      dark: '#0D47A1',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#4CAF50', // Verde para tipos Planta
      light: '#81C784',
      dark: '#388E3C'
    },
    warning: {
      main: '#FF9800', // Laranja para tipos Fogo
      light: '#FFB74D',
      dark: '#F57C00'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#212121',
      secondary: '#757575'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '0.1em'
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    button: {
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(220, 20, 60, 0.1)',
    '0px 4px 8px rgba(220, 20, 60, 0.15)',
    '0px 6px 12px rgba(220, 20, 60, 0.2)',
    '0px 8px 16px rgba(220, 20, 60, 0.25)',
    '0px 10px 20px rgba(220, 20, 60, 0.3)',
    '0px 12px 24px rgba(220, 20, 60, 0.35)',
    '0px 14px 28px rgba(220, 20, 60, 0.4)',
    '0px 16px 32px rgba(220, 20, 60, 0.45)',
    '0px 18px 36px rgba(220, 20, 60, 0.5)',
    '0px 20px 40px rgba(220, 20, 60, 0.55)',
    '0px 22px 44px rgba(220, 20, 60, 0.6)',
    '0px 24px 48px rgba(220, 20, 60, 0.65)',
    '0px 26px 52px rgba(220, 20, 60, 0.7)',
    '0px 28px 56px rgba(220, 20, 60, 0.75)',
    '0px 30px 60px rgba(220, 20, 60, 0.8)',
    '0px 32px 64px rgba(220, 20, 60, 0.85)',
    '0px 34px 68px rgba(220, 20, 60, 0.9)',
    '0px 36px 72px rgba(220, 20, 60, 0.95)',
    '0px 38px 76px rgba(220, 20, 60, 1)',
    '0px 40px 80px rgba(220, 20, 60, 1)',
    '0px 42px 84px rgba(220, 20, 60, 1)',
    '0px 44px 88px rgba(220, 20, 60, 1)',
    '0px 46px 92px rgba(220, 20, 60, 1)',
    '0px 48px 96px rgba(220, 20, 60, 1)'
  ]
});