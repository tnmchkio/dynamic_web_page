from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("form_to_cv.html")

@app.route("/curriculum",  methods=["POST"] )
def info():
    names = request.form.get('nombre')
    birth_date =request.form.get('fecha')
    ocupation = request.form.get('ocupacion')
    contact = request.form.get('contacto')
    nationality = request.form.get('nacionalidad')
    ingles = request.form.get('ingles')
    lenguajes = request.form.get('lenguajes')
    aptitud = request.form.get('aptitud')
    habilidades = request.form.get('habilidades')
    perfil = request.form.get('perfil')
    return render_template('cv.html', 
        perfil=perfil,
        habilidades=habilidades,
        aptitud=aptitud,
        lenguajes=lenguajes,
        ingles=ingles,
        nationality=nationality,
        contact=contact,
        ocupation=ocupation,
        birth_date=birth_date,
        names=names,
        )
