import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchContainer = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '24px',
  padding: '8px 16px',
  marginBottom: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: '2px solid transparent',
  transition: 'all 0.3s ease',
  '&:focus-within': {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0 4px 16px rgba(220, 20, 60, 0.2)`
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    border: 'none',
    borderRadius: '20px',
    '& fieldset': {
      border: 'none'
    },
    '&:hover fieldset': {
      border: 'none'
    },
    '&.Mui-focused fieldset': {
      border: 'none'
    }
  },
  '& .MuiInputBase-input': {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 0.7
    }
  }
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  background: `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: '#FFFFFF',
  width: '40px',
  height: '40px',
  boxShadow: '0 2px 8px rgba(220, 20, 60, 0.3)',
  '&:hover': {
    background: `linear-gradient(145deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(220, 20, 60, 0.4)'
  }
}));

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Digite o nome ou número do Pokémon..." }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer elevation={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StyledTextField
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={handleClear} size="small">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <SearchButton onClick={handleSearch}>
          <SearchIcon />
        </SearchButton>
      </Box>
    </SearchContainer>
  );
}