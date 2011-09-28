from flask import Flask, Response
app = Flask(__name__)

@app.route('/')
def home():
    return Response 'Hello World!'

if __name__ == '__main__':
    app.run()
