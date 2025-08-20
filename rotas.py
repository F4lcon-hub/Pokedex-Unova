"""
Módulo de rotas para a Pokédex Flask.
Define as rotas e lógica de busca de Pokémon usando a PokéAPI.
"""

from flask import Blueprint, render_template, request
import requests

rotas = Blueprint('rotas', __name__)

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
            tipos = [t['type']['name'].capitalize() for t in data['types']]
            fraquezas_set = set()
            for t in data['types']:
                tipo_url = t['type']['url']
                tipo_resp = requests.get(tipo_url)
                if tipo_resp.status_code == 200:
                    tipo_data = tipo_resp.json()
                    for weak in tipo_data['damage_relations']['double_damage_from']:
                        fraquezas_set.add(weak['name'].capitalize())
            fraquezas = list(fraquezas_set)
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
                                nomes += listar_evolucoes(evo)
                        return nomes
                    evolucoes = listar_evolucoes(chain)
            stats = {s['stat']['name'].capitalize(): s['base_stat'] for s in data['stats']}
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