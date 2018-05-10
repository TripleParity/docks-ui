# Swarm Development

The two scripts included in this folder can be used to quickly deploy
a very minimalistic swarm for **development** purposes.

As such, the script _does not_ start the Docks-UI and Docks-API containers.
You have to start those manually.

## Usage

First, ensure the Docks-API and Docks-UI services are running. They should not
be deployed to the swarm.

- Start the swarm by running the `start-demo-swarm.sh` script
- Tear down the swarm by running the `remove-demo-swarm.sh` script

After the swarm has started, 2 demo NGINX services should be running on the swarm. 
They can be accessed at `<swarm-ip>:8001` and `<swarm-ip>:8002`.

#### Example
With both Docks-API and the swarm demo deployed, the Docks-API can be queried
for swarm-specific information. For example:

```
curl  http://localhost:8080/docker/services
-> [
     {
       "ID": "pv89iq5plzlfjffm2x77oa4ys",
       "Spec": {
         "Name": "demo-nginx-1_web",
         "Labels": {
           "com.docker.stack.image": "nginx",
           "com.docker.stack.namespace": "demo-nginx-1"
         }, ...
```