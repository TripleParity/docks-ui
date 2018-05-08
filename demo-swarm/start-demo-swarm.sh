#!/usr/bin/env bash

echo "----- Trying to init swarm... (will fail if already part of one)"
sudo docker swarm init

echo "----- Creating registry for images"
sudo docker service create --name demo_registry --publish published=5000,target=5000 registry:2

echo "----- Building Angular image"
sudo docker-compose build

echo "----- Pushing Angular image"
sudo docker-compose push

echo "----- Deploy Stack"
sudo docker stack deploy --compose-file docker-compose.yml docks-swarm-demo