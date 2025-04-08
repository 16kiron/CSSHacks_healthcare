from flask import Flask, request

app = Flask(__name__)
@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

@app.route('/handle_url_param')
def handle_param():
    if 'greeting' in request.args.keys() & 'name' in request.args.keys():
        greeting = request.args['greeting']
        name = request.args['name']
        return f'{greeting}, {name}!'

    else:
        return 'Some arguments are missing!'



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
# once you deploy this app , make sure to put debug=False
# putting debug=True keeps your server running, doesn't need restarting of app to apply changes
# & shows error messages if exists