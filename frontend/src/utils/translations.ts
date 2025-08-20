// Traduções para tipos de Pokémon
export const typeTranslations: Record<string, string> = {
  'normal': 'Normal',
  'fire': 'Fogo',
  'water': 'Água',
  'electric': 'Elétrico',
  'grass': 'Planta',
  'ice': 'Gelo',
  'fighting': 'Lutador',
  'poison': 'Venenoso',
  'ground': 'Terra',
  'flying': 'Voador',
  'psychic': 'Psíquico',
  'bug': 'Inseto',
  'rock': 'Pedra',
  'ghost': 'Fantasma',
  'dragon': 'Dragão',
  'dark': 'Sombrio',
  'steel': 'Metálico',
  'fairy': 'Fada'
};

// Traduções para estatísticas
export const statTranslations: Record<string, string> = {
  'hp': 'Vida',
  'attack': 'Ataque',
  'defense': 'Defesa',
  'special-attack': 'Ataque Especial',
  'special-defense': 'Defesa Especial',
  'speed': 'Velocidade'
};

// Função para traduzir tipos
export const translateType = (type: string): string => {
  return typeTranslations[type.toLowerCase()] || type;
};

// Função para traduzir estatísticas
export const translateStat = (stat: string): string => {
  const normalizedStat = stat.toLowerCase().replace(/\s+/g, '-');
  return statTranslations[normalizedStat] || stat;
};