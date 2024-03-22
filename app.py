from flask import Flask, render_template, url_for

import sqlite3

app = Flask(__name__, static_url_path='/static')

def get_db_connection():
    conn = sqlite3.connect('jack.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def runSite():
    conn = get_db_connection()
    projects = conn.execute("SELECT id, name, description, websiteurl, githuburl, imagepath FROM projects").fetchall()
    languages = conn.execute("SELECT id, name, experience FROM languages").fetchall()
    
    #new database code
    #projects = conn.execute("SELECT id, name, experience, type").fetchall()
    conn.close()
    print(projects)
    return render_template('resume.html', projects=projects, languages=languages)

if __name__ == '__main__':
    app.run(debug=True)

