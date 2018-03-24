# docks-ui
Web user interface for docks


## Requirements
Make sure [docks](https://github.com/TripleParity/docks) is working; In particular follow the instructions on the develop branch.

Install [docker](https://docs.docker.com/install/)

Install [compose](https://docs.docker.com/compose/install/)

## Development Example
If everything is running you can simply run the command

```bash
docker-compose up
```

Please note that it might take a while to download angular and friends. The dev server is hosting at localhost:4200

## Build for Production
Docks UI can be build and served with nginx on port 80:

```bash
docker build -t docks-ui .
```

### Running production image
To run the image using a different port:
```
docker run -p 4200:80 -it docks-ui
```
