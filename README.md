# Docks UI
Web user interface for docks

## Deployment
The Docks API is expected to run at `127.0.0.1:8080`


Docks UI can be deployed as follows:
```
$ docker run -d -p 4200:80 --name docks-ui tripleparity/docks-ui
```
The web interface can then be accessed at http://127.0.0.1:4200/

To stop the running container:
```
$ docker stop docks-ui
```

## Development
### Requirements
- Make sure [docks](https://github.com/TripleParity/docks) is working.
- Install [docker](https://docs.docker.com/install/)
- Install [compose](https://docs.docker.com/compose/install/)

### Development Example
If everything is running you can simply run the command

```bash
$ docker-compose up
```
Please note that it might take a while to download angular and friends. The dev server is hosting at localhost:4200
