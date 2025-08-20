"""
Módulo de rotas para a Pokédex Flask.
Define as rotas e lógica de busca de Pokémon usando a PokéAPI.
"""

from flask import Blueprint, render_template, request
import requests

rotas = Blueprint('rotas', __name__)

# Traduções para tipos de Pokémon
TYPE_TRANSLATIONS = {
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
}

# Traduções para estatísticas
STAT_TRANSLATIONS = {
    'hp': 'Vida',
    'attack': 'Ataque',
    'defense': 'Defesa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defesa Especial',
    'speed': 'Velocidade'
}

def translate_type(type_name):
    """Traduz o nome do tipo do inglês para português"""
    return TYPE_TRANSLATIONS.get(type_name.lower(), type_name.capitalize())

def translate_stat(stat_name):
    """Traduz o nome da estatística do inglês para português"""
    return STAT_TRANSLATIONS.get(stat_name.lower(), stat_name.capitalize())

# Rota principal
@rotas.route('/', methods=['GET', 'POST'])
def index():
    """
    Rota principal da Pokédex.
    - GET: Exibe o formulário de busca.
    - POST: Recebe o nome do Pokémon, consulta a PokéAPI e retorna os dados ou erro.
    """
    pokemon = None
    error = None
    if request.method == 'POST':
        name = request.form.get('name', '').lower()
        url = f'https://pokeapi.co/api/v2/pokemon/{name}'
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            # Traduzir tipos
            tipos = [translate_type(t['type']['name']) for t in data['types']]
            
            # Buscar fraquezas e traduzir
            fraquezas_set = set()
            for t in data['types']:
                tipo_url = t['type']['url']
                tipo_resp = requests.get(tipo_url)
                if tipo_resp.status_code == 200:
                    tipo_data = tipo_resp.json()
                    for weak in tipo_data['damage_relations']['double_damage_from']:
                        fraquezas_set.add(translate_type(weak['name']))
            fraquezas = list(fraquezas_set)
            
            # Buscar evoluções (sem megaevoluções)
            evolucoes = []
            species_url = data['species']['url']
            species_resp = requests.get(species_url)
            if species_resp.status_code == 200:
                species_data = species_resp.json()
                evo_chain_url = species_data['evolution_chain']['url']
                evo_resp = requests.get(evo_chain_url)
                if evo_resp.status_code == 200:
                    evo_data = evo_resp.json()
                    chain = evo_data['chain']
                    def listar_evolucoes(chain):
                        nomes = [chain['species']['name'].capitalize()]
                        if chain['evolves_to']:
                            for evo in chain['evolves_to']:
                                # Filtrar megaevoluções
                                if not any(detail.get('trigger', {}).get('name') == 'use-item' and 
                                         'mega' in detail.get('item', {}).get('name', '').lower() 
                                         for detail in evo.get('evolution_details', [])):
                                    nomes += listar_evolucoes(evo)
                        return nomes
                    evolucoes = listar_evolucoes(chain)
            
            # Traduzir estatísticas
            stats = {translate_stat(s['stat']['name']): s['base_stat'] for s in data['stats']}
            
            pokemon = {
                'name': data['name'].capitalize(),
                'image': data['sprites']['front_default'],
                'types': tipos,
                'fraquezas': fraquezas,
                'evolucoes': evolucoes,
                'stats': stats
            }
        else:
            error = 'Pokémon não encontrado.'
    return render_template('index.html', pokemon=pokemon, error=error)

# Rota para página sobre
@rotas.route('/sobre')
def sobre():
    """
    Rota que exibe informações sobre o projeto e a região de Unova.
    """
    return render_template('sobre.html')

# Rota para página dos chefes de Unova
@rotas.route('/chefes')
def chefes():
    """
    Rota que exibe os líderes de ginásio e campeões dos jogos da região de Unova.
    """
    return render_template('chefes.html')