# Pokédex Unova

Uma aplicação Flask que permite buscar informações sobre Pokémon usando a PokéAPI, com foco na região de Unova.

## 🚀 Deploy no Render

Este projeto está configurado para deploy automático no Render.

### Estrutura do Projeto

```
├── app.py              # Aplicação Flask principal
├── rotas.py           # Rotas e lógica da aplicação
├── requirements.txt   # Dependências Python
├── render.yaml        # Configuração do Render
├── runtime.txt        # Versão do Python
├── templates/         # Templates HTML
├── static/           # Arquivos estáticos (CSS, imagens)
└── frontend/         # Componentes React (para desenvolvimento)
```

### Como fazer o deploy:

1. **Conecte seu repositório ao Render:**
   - Acesse [render.com](https://render.com)
   - Conecte sua conta GitHub
   - Selecione este repositório

2. **Configure o serviço:**
   - Tipo: Web Service
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Python Version: 3.11.0

3. **Deploy automático:**
   - O Render detectará automaticamente o `render.yaml`
   - O deploy será feito automaticamente

### Funcionalidades

- ✅ Busca de Pokémon por nome ou número
- ✅ Exibição de tipos, fraquezas e evoluções
- ✅ Estatísticas base dos Pokémon
- ✅ Interface responsiva
- ✅ Páginas sobre a região de Unova
- ✅ Galeria dos líderes de ginásio

### Tecnologias

- **Backend:** Flask, Python 3.11
- **API:** PokéAPI
- **Deploy:** Render
- **Frontend:** HTML, CSS, JavaScript

### Desenvolvimento Local

```bash
# Instalar dependências
pip install -r requirements.txt

# Executar aplicação
python app.py
```

A aplicação estará disponível em `http://localhost:5000`