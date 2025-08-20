import os
from flask import Flask
from rotas import rotas

app = Flask(__name__)
app.register_blueprint(rotas)

if __name__ == '__main__':
    # Para desenvolvimento local
    app.run(debug=True)
else:
    # Para produção (Render)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)