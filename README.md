# 📊 igmk Data Browser

Das Frontend des  **IGMK Data Browser**.


## 🚀 Features

- 📊 Interaktive Visualisierung
- 🐳 Einfache Nutzung via Docker



## 🧰 Voraussetzungen

- [Docker](https://www.docker.com/) installiert

## 🏗️ Docker Image bauen

Du kannst das Docker-Image lokal selbst bauen mit:

```bash
docker build -t databrowser .
```


## ▶️ Schnellstart (Docker)

Starte den Data Browser mit folgendem Befehl:

```bash
docker run -p 80:80 databrowser
```

Oder mit Docker Compose:

```YAML
version: "3.8"

services:
  databrowser:
    image: databrowser
    container_name: databrowser
    ports:
      - "80:80"
    restart: unless-stopped
```
