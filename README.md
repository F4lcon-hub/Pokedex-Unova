# 🔥 Pokédex Unova

Uma Pokédex interativa inspirada na região de Unova dos jogos Pokémon Black & White, desenvolvida em Flask com design responsivo e modo escuro.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-blue.svg)
![Responsive](https://img.shields.io/badge/Design-Responsive-purple.svg)

## 📋 Sobre o Projeto

Esta Pokédex foi desenvolvida como um projeto educativo que permite buscar informações detalhadas sobre Pokémon utilizando a **PokéAPI**. O design é inspirado nos jogos da região de Unova (Pokémon Black, White, Black 2 e White 2) com uma paleta de cores azul característica do Nintendo DS.

### ✨ Principais Funcionalidades

- 🔍 **Busca de Pokémon** por nome ou número
- 📊 **Informações completas**: tipos, fraquezas, evoluções, habilidades e stats
- 🎮 **Navegação interativa** entre evoluções
- 🌙 **Modo escuro** com persistência no navegador
- 📱 **Design totalmente responsivo** para todos os dispositivos
- 🏆 **Galeria de chefes** da região de Unova com cores por tipo
- 📖 **Página informativa** sobre a região e os jogos

## 🎨 Design e Tema Visual

### Paleta de Cores Unova
- **Azul Principal**: `#3a5da8` - Cor característica da região
- **Azul Claro**: `#e3eaf6` - Backgrounds e elementos secundários  
- **Azul Accent**: `#b7e0f7` - Destaques e gradientes
- **Texto**: `#2c4377` - Texto principal legível
- **Modo Escuro**: `#232a3a` - Background escuro elegante

### Características Visuais
- 🎨 **Gradientes inspirados no Nintendo DS**
- 🃏 **Cards com bordas arredondadas e sombras suaves**
- ⚡ **Animações e transições fluidas**
- 🎯 **Cores específicas por tipo de Pokémon/Ginásio**
- 📐 **Layout flexível e adaptativo**

## 🚀 Como Executar

### Pré-requisitos
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd teste-pokedex-py
```

2. **Instale as dependências**
```bash
pip install -r requirements.txt
```

3. **Execute a aplicação**
```bash
python app.py
```

4. **Acesse no navegador**
```
http://localhost:5000
```

## 📁 Estrutura do Projeto

```
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
```

## 🔧 Funcionalidades Técnicas

### Backend (Flask)
- **Integração com PokéAPI** para dados em tempo real
- **Tratamento de erros** para Pokémon não encontrados
- **Processamento de evoluções** com navegação recursiva
- **Cálculo de fraquezas** baseado em tipos
- **Arquitetura modular** com blueprints

### Frontend
- **HTML5 semântico** com templates Jinja2
- **CSS3 moderno** com Flexbox e Grid
- **JavaScript vanilla** para modo escuro
- **Design responsivo** com media queries
- **Acessibilidade** com labels e alt texts adequados

### Responsividade
- 📱 **Mobile First** - Otimizado para smartphones
- 📊 **Breakpoints**: 480px, 600px, 768px
- 🔄 **Layout adaptativo** que se ajusta ao dispositivo
- 👆 **Elementos touch-friendly** em mobile
- 🎯 **Navegação otimizada** para cada tamanho de tela

## 📱 Compatibilidade

### Dispositivos Suportados
- 📱 **Smartphones** (320px - 480px)
- 📱 **Tablets** (481px - 768px)
- 💻 **Desktop** (769px+)
- 🖥️ **Telas grandes** (1200px+)

### Navegadores
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🎮 Páginas e Recursos

### 🏠 Página Principal (/)
- Formulário de busca responsivo
- Card detalhado do Pokémon encontrado
- Sprites oficiais da PokéAPI
- Botões interativos para evoluções
- Stats visualizados com chips coloridos

### 👑 Chefes de Unova (/chefes)
- Galeria de todos os líderes de ginásio
- Cards coloridos por tipo de Pokémon
- Sprites oficiais dos treinadores
- Layout em grid responsivo
- Informações de localização

### 📖 Sobre o Projeto (/sobre)
- História da região de Unova
- Galeria das capas dos jogos
- Informações técnicas do projeto
- Layout responsivo para imagens

## 🌙 Modo Escuro

O modo escuro oferece uma experiência visual confortável com:
- 🎨 **Paleta escura elegante** (#232a3a, #1a2233)
- 💾 **Persistência no localStorage**
- 🔄 **Transição suave** entre modos
- 👁️ **Contraste otimizado** para leitura
- 🎯 **Cores de destaque** mantidas

## 🛠️ Tecnologias Utilizadas

### Backend
- **Flask** - Framework web Python
- **Requests** - Requisições HTTP para PokéAPI
- **Jinja2** - Engine de templates

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e responsividade
- **JavaScript** - Interatividade (modo escuro)

### APIs Externas
- **PokéAPI** - Dados dos Pokémon
- **Pokémon Showdown** - Sprites dos treinadores

## 🎯 Melhorias Implementadas

### Responsividade
- ✅ Meta viewport em todos os templates
- ✅ Formulários adaptativos para mobile
- ✅ Cards redimensionáveis por breakpoint
- ✅ Navegação otimizada para touch
- ✅ Imagens responsivas com aspect ratio

### Performance
- ✅ CSS otimizado com media queries eficientes
- ✅ Imagens com lazy loading implícito
- ✅ Requests otimizados para a PokéAPI
- ✅ Cache de localStorage para preferências

### UX/UI
- ✅ Feedback visual em todas as interações
- ✅ Estados de loading e erro tratados
- ✅ Navegação intuitiva entre páginas
- ✅ Acessibilidade com foco visível

## 👨‍💻 Desenvolvedor

**Falcon** - Desenvolvedor Full Stack  
📧 Contato: [Seu email aqui]  
🌐 Portfolio: [Seu portfolio aqui]

## 📄 Licença

Este projeto é educativo e sem fins lucrativos. Pokémon é uma marca registrada da Nintendo/Game Freak/Creatures Inc.

## 🙏 Agradecimentos

- **PokéAPI** - Pela API gratuita e completa
- **Nintendo/Game Freak** - Pelos jogos que inspiraram o design
- **Pokémon Showdown** - Pelos sprites dos treinadores
- **Comunidade Pokémon** - Pela paixão que motiva projetos como este

---

⭐ **Se gostou do projeto, deixe uma estrela!** ⭐

*Desenvolvido com ❤️ e inspirado na região de Unova*