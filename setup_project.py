import os

folders = [
    "elearning-app/backend/app",
    "elearning-app/backend/static/uploads",
    "elearning-app/backend/templates",
    "elearning-app/frontend/css",
    "elearning-app/frontend/js",
]

files = {
    "elearning-app/backend/app/__init__.py": "",
    "elearning-app/backend/app/routes.py": "# Flask routes will go here\n",
    "elearning-app/backend/app/models.py": "# SQLAlchemy models go here\n",
    "elearning-app/backend/config.py": "# Config variables\n",
    "elearning-app/backend/run.py": "from app import app\n\nif __name__ == '__main__':\n    app.run(debug=True)",
    "elearning-app/backend/templates/index.html": "<!-- Jinja2 Template -->\n<html></html>",
    "elearning-app/frontend/index.html": "<!-- Frontend HTML -->\n<html></html>",
    "elearning-app/frontend/css/styles.css": "/* CSS styles */",
    "elearning-app/frontend/js/script.js": "// JS Script",
    "elearning-app/requirements.txt": "Flask\n",
    "elearning-app/README.md": "# E-Learning App",
}

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=T_
