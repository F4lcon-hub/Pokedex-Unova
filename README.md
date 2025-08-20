🔥 Pokédex Unova

Uma Pokédex interativa inspirada na região de Unova dos jogos Pokémon Black & White, desenvolvida em Flask com design responsivo e UI/UX baseado em uma Pokédex.
📋 Sobre o Projeto

Esta Pokédex foi desenvolvida como um projeto educativo que permite buscar informações detalhadas sobre Pokémon utilizando a PokéAPI.
✨ Principais Funcionalidades

    🔍 Busca de Pokémon por nome ou número
    📊 Informações completas: tipos, fraquezas, evoluções e stats
    🎮 Navegação interativa entre evoluções
    🌙 Modo escuro com persistência no navegador
    🏆 Galeria de chefes da região de Unova com cores por tipo
    📖 Página informativa sobre a região e os jogos
    ❤️ Acervo para favoritar seus pokémons favoritos salvos localmente

🚀 Como Executar
Pré-requisitos

    Python 3.8 ou superior
    pip (gerenciador de pacotes Python)

Instalação

    Clone o repositório

git clone <url-do-repositorio>
cd teste-pokedex-py

    Instale as dependências

pip install -r requirements.txt

    Execute a aplicação

python app.py

    Acesse no navegador

http://localhost:5000

📁 Estrutura do Projeto

teste-pokedex-py/
├── 📄 app.py                 # Aplicação principal Flask
├── 📄 rotas.py              # Definição das rotas e lógica da API
├── 📄 requirements.txt      # Dependências Python
├── 📁 templates/            # Templates HTML
│   ├── 🏠 index.html        # Página principal (busca)
│   ├── 👑 chefes.html       # Galeria de líderes de ginásio
│   ├── 📖 sobre.html        # Informações sobre o projeto
│   ├── 🔝 header.html       # Cabeçalho com navegação
│   └── 🔻 footer.html       # Rodapé
├── 📁 static/               # Arquivos estáticos (CSS/imagens)
│   ├── 🎨 unova.css         # Estilos principais + responsivo
│   ├── 🔝 header_ds.css     # Estilos do cabeçalho
│   ├── 🔻 footer_ds.css     # Estilos do rodapé
│   ├── 👑 chefes.css        # Estilos da página de chefes
│   └── 🖼️ *.jpeg           # Imagens das capas dos jogos
└── 📄 README.md             # Este arquivo

🔧 Funcionalidades Técnicas
Backend (Flask)

    Integração com PokéAPI para dados em tempo real
    Tratamento de erros para Pokémon não encontrados
    Processamento de evoluções com navegação recursiva
    Cálculo de fraquezas baseado em tipos
    Arquitetura modular com blueprints

Frontend

    HTML5 semântico com templates Jinja2
    CSS3 moderno com Flexbox e Grid
    JavaScript vanilla para modo escuro
    Design responsivo com media queries
    Acessibilidade com labels e alt texts adequados

Responsividade

    📱 Mobile First - Otimizado para smartphones
    📊 Breakpoints: 480px, 600px, 768px
    🔄 Layout adaptativo que se ajusta ao dispositivo
    👆 Elementos touch-friendly em mobile
    🎯 Navegação otimizada para cada tamanho de tela

📱 Compatibilidade
Dispositivos Suportados

    📱 Smartphones (320px - 480px)
    📱 Tablets (481px - 768px)
    💻 Desktop (769px+)
    🖥️ Telas grandes (1200px+)

Navegadores

    ✅ Chrome 80+
    ✅ Firefox 75+
    ✅ Safari 13+
    ✅ Edge 80+

🎮 Páginas e Recursos
🏠 Página Principal (/)

    Formulário de busca responsivo
    Card detalhado do Pokémon encontrado
    Sprites oficiais da PokéAPI
    Botões interativos para evoluções
    Stats visualizados com chips coloridos

👑 Chefes de Unova (/chefes)

    Galeria de todos os líderes de ginásio
    Cards coloridos por tipo de Pokémon
    Sprites oficiais dos treinadores
    Layout em grid responsivo
    Informações de localização

📖 Sobre o Projeto (/sobre)

    História da região de Unova
    Galeria das capas dos jogos
    Informações técnicas do projeto
    Layout responsivo para imagens

🌙 Modo Escuro

O modo escuro oferece uma experiência visual confortável com:

    🎨 Paleta escura elegante (#232a3a, #1a2233)
    💾 Persistência no localStorage
    🔄 Transição suave entre modos
    👁️ Contraste otimizado para leitura
    🎯 Cores de destaque mantidas

- ❤️ Acervo

    Permite favoritar seus pokemons favoritos quando se faz uma busca
    Permite tambem a remoção dos mesmos caso você mude de ideia
    Salvo localmente mo localStorage

🛠️ Tecnologias Utilizadas
Backend

    Flask - Framework web Python
    Requests - Requisições HTTP para PokéAPI
    Jinja2 - Engine de templates

Frontend

    HTML5 - Estrutura semântica
    CSS3 - Estilos e responsividade
    JavaScript - Interatividade (modo escuro)

APIs Externas

    PokéAPI - Dados dos Pokémon
    Pokémon Showdown - Sprites dos treinadores

👨‍💻 Desenvolvedor

Falcon - Desenvolvedor Full Stack
📄 Licença

Este projeto é educativo e sem fins lucrativos. Pokémon é uma marca registrada da Nintendo/Game Freak/Creatures Inc.
