// Interface para Pokemon favorito
export interface FavoritePokemon {
  id: string;
  name: string;
  image: string;
  types: string[];
  fraquezas: string[];
  evolucoes: string[];
  stats: Record<string, number>;
  dateAdded: string;
}

// Chave para localStorage
const FAVORITES_KEY = 'pokedex_favorites';

// Gerenciador de favoritos
export class FavoritesManager {
  // Obter todos os favoritos
  static getFavorites(): FavoritePokemon[] {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
      return [];
    }
  }

  // Adicionar aos favoritos
  static addFavorite(pokemon: Omit<FavoritePokemon, 'dateAdded'>): boolean {
    try {
      const favorites = this.getFavorites();
      const pokemonId = this.generatePokemonId(pokemon.name);
      
      // Verificar se já está nos favoritos
      if (favorites.some(fav => fav.id === pokemonId)) {
        return false; // Já está nos favoritos
      }

      const newFavorite: FavoritePokemon = {
        ...pokemon,
        id: pokemonId,
        dateAdded: new Date().toISOString()
      };

      favorites.push(newFavorite);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      return true;
    } catch (error) {
      console.error('Erro ao adicionar favorito:', error);
      return false;
    }
  }

  // Remover dos favoritos
  static removeFavorite(pokemonName: string): boolean {
    try {
      const favorites = this.getFavorites();
      const pokemonId = this.generatePokemonId(pokemonName);
      const filteredFavorites = favorites.filter(fav => fav.id !== pokemonId);
      
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredFavorites));
      return true;
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
      return false;
    }
  }

  // Verificar se está nos favoritos
  static isFavorite(pokemonName: string): boolean {
    const favorites = this.getFavorites();
    const pokemonId = this.generatePokemonId(pokemonName);
    return favorites.some(fav => fav.id === pokemonId);
  }

  // Limpar todos os favoritos
  static clearFavorites(): void {
    try {
      localStorage.removeItem(FAVORITES_KEY);
    } catch (error) {
      console.error('Erro ao limpar favoritos:', error);
    }
  }

  // Gerar ID único para Pokemon
  private static generatePokemonId(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  // Obter contagem de favoritos
  static getFavoritesCount(): number {
    return this.getFavorites().length;
  }

  // Obter favoritos ordenados por data
  static getFavoritesSorted(): FavoritePokemon[] {
    const favorites = this.getFavorites();
    return favorites.sort((a, b) => 
      new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  }
}