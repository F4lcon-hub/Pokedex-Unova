"""
Módulo de rotas para a Pokédex Flask.
Define as rotas e lógica de busca de Pokémon usando a PokéAPI.
"""

from flask import Blueprint, render_template, request
import requests

rotas = Blueprint('rotas', __name__)


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
        # Recebe o nome do Pokémon do formulário
        name = request.form.get('name', '').lower()
        url = f'https://pokeapi.co/api/v2/pokemon/{name}'
        # Faz requisição à PokéAPI
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            # Monta o dicionário com dados do Pokémon
            pokemon = {
                'name': data['name'].capitalize(),
                'image': data['sprites']['front_default'],
                'types': [t['type']['name'].capitalize() for t in data['types']]
            }
        else:
            # Caso não encontre, retorna mensagem de erro
            error = 'Pokémon não encontrado.'
    return render_template('index.html', pokemon=pokemon, error=error)

# Rota para página sobre

@rotas.route('/sobre', methods=['GET', 'POST'])
def sobre():
    """
    Rota que exibe informações sobre o projeto, região de Unova e do Pokémon pesquisado.
    Permite busca de Pokémon e exibe tipos, fraquezas, evoluções e megaevolução.
    """
    pokemon = None
    error = None
    fraquezas = []
    evolucoes = []
    mega = None
    if request.method == 'POST':
        name = request.form.get('name', '').lower()
        url = f'https://pokeapi.co/api/v2/pokemon/{name}'
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            tipos = [t['type']['name'].capitalize() for t in data['types']]
            # Fraquezas: busca os tipos e suas fraquezas
            fraquezas_set = set()
            for t in data['types']:
                tipo_url = t['type']['url']
                tipo_resp = requests.get(tipo_url)
                if tipo_resp.status_code == 200:
                    tipo_data = tipo_resp.json()
                    for weak in tipo_data['damage_relations']['double_damage_from']:
                        fraquezas_set.add(weak['name'].capitalize())
            fraquezas = list(fraquezas_set)
            # Evoluções
            species_url = data['species']['url']
            species_resp = requests.get(species_url)
            if species_resp.status_code == 200:
                species_data = species_resp.json()
                evo_chain_url = species_data['evolution_chain']['url']
                evo_resp = requests.get(evo_chain_url)
                if evo_resp.status_code == 200:
                    evo_data = evo_resp.json()
                    chain = evo_data['chain']
                    evolucoes = []
                    atual = chain
                    while atual:
                        evolucoes.append(atual['species']['name'].capitalize())
                        if atual['evolves_to']:
                            atual = atual['evolves_to'][0]
                        else:
                            break
            # Mega evolução (PokéAPI não traz mega diretamente, mas verifica se tem 'mega' no nome das formas)
            mega = None
            if species_resp.status_code == 200:
                varieties = species_data.get('varieties', [])
                for v in varieties:
                    if 'mega' in v['pokemon']['name']:
                        mega = v['pokemon']['name'].capitalize()
                        break
            pokemon = {
                'name': data['name'].capitalize(),
                'image': data['sprites']['front_default'],
                'types': tipos,
                'fraquezas': fraquezas,
                'evolucoes': evolucoes,
                'mega': mega
            }
        else:
            error = 'Pokémon não encontrado.'
    return render_template('sobre.html', pokemon=pokemon, error=error)
