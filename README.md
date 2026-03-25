# igmk Data Browser

Das Frontend des  **IGMK Data Browser**.

## Usage

### Run local (only for dev)
1. Clone Repository
2. rename `dataBrowser/dataBrowser.js.temp` to `dataBrowser/dataBrowser.js` (undo before committing to github)
3. replace all `$APIURL` by api-server URL in `dataBrowser/dataBrowser.js` (undo before committing to github)
4. open `dataBrowser/index.html` in web browser

### Docker
```YAML
version: "3.8"

services:
  databrowser:
    image: ghcr.io/igmk/databrowser:latest
    container_name: databrowser
    ports:
      - "8080:80"
    environment:
      - APIURL=https://api.herz-campaigns.de
    restart: unless-stopped
```
