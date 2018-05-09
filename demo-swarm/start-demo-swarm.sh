#!/usr/bin/env bash

echo "----- Trying to init swarm... (will fail if already part of one)"
sudo docker swarm init

#echo "----- Creating registry for images"
#sudo docker service create --name demo_registry --publish published=5000,target=5000 registry:2
#
#echo "----- Building Angular image"
#sudo docker-compose build
#
#echo "----- Pushing Angular image"
#sudo docker-compose push

echo "----- Deploy NGINX Stack 1"
sudo docker stack deploy --compose-file ./demo-nginx-1/docker-compose.yml demo-nginx-1

echo "----- Deploy NGINX Stack 2"
sudo docker stack deploy --compose-file ./demo-nginx-2/docker-compose.yml demo-nginx-2