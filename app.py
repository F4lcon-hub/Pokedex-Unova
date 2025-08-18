
from flask import Flask
from rotas import rotas


app = Flask(__name__)
app.register_blueprint(rotas)

if __name__ == '__main__':
    # Executa o servidor Flask em modo debug
    app.run(debug=True)
