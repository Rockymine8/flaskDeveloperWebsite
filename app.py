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
    projects = conn.execute("SELECT id, name, description, websiteurl, display, class FROM projects").fetchall()
    conn.close()
    print(projects)
    return render_template('resume.html', projects=projects)


