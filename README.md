# Docks UI 

[![Build Status](https://travis-ci.org/TripleParity/docks-ui.svg?branch=master)](https://travis-ci.org/TripleParity/docks-ui)

Web dashboard for Docks

## Deploying Docks in Production
[TripleParity/docks](https://github.com/TripleParity/docks) contains the latest instructions for deploying Docks using images from Docker Hub

## Configure Docks API Address
- When deploying docks-ui using Docker, the Docks API address can be set in the `DOCKS_API_ADDRESS` environment variable
- When using Angular CLI to serve Docks UI, the Docks API address is set in `src/config`

## Development
### Building and Deploying docks-ui to Docker Swarm
This process simulates a production environment.

#### Requirements
- Docker 17.05 or higher for multi-stage builds
- Swarm with Manager Node

#### Process
1. Deploy registry to swarm for serving the docks-ui image
    ```
    $ docker service create --name registry \
    --publish published=5000,target=5000 registry:2
    ```

2. Build docks-ui
    ```
    $ docker build -t 127.0.0.1:5000/docks-ui:0.0.3-dev .
    ```

3. Push docks-ui to local registry
    ```
    $ docker push 127.0.0.1:5000/docks-ui:0.0.3-dev
    ```

4. Deploy docks-api using images from Docker Hub
    ```
    $ docker stack deploy -c docker-compose-api.yml docks-api
    ```

5. Deploy docks-ui using image from local registry
    ```
    $ docker stack deploy -c docker-compose-ui.local.yml docks-ui
    ```

#### Updating docks-ui image
After making changes to docks-ui you need to rebuild the image, push the new image to the registry and the update the docks-ui stack:
```
$ docker build -t 127.0.0.1:5000/docks-ui:0.0.3-dev .
$ docker push 127.0.0.1:5000/docks-ui:0.0.3-dev
$ docker stack deploy -c docker-compose-api.yml docks-api
```

### Serving Docks UI using Angular CLI
This process uses a production version of Docks API and Angular CLI
to serve a development version of Docks UI. This is the most flexible development process.

#### Requirements
- Docker 17.05 or higher for multi-stage builds
- Swarm with Manager Node
- Node.js 8
- Angular CLI 1.7.4 (i.e not Angular 6)

#### Process
1. Install Angular CLI
    ```
    $ npm install -g @angular/cli@1.7.4
    ```

2. Install node packages
    ```
    npm install
    ```

3. Deploy docks-api to the swarm
    ```
    $ docker stack deploy -c docker-compose-api.yml docks-api
    ```

4. Serve docks-ui using Angular CLI
    ```
    $ ng serve --aot
    ```

    The `--aot` flag is required to catch Ahead Of Time errors early as this will be used in production