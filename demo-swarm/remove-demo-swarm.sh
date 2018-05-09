#!/usr/bin/env bash

echo "----- Removing Stacks"
sudo docker stack rm demo-nginx-1
sudo docker stack rm demo-nginx-2

#echo "----- Removing registry..."
#sudo docker service rm demo_registry

echo "----- Leaving swarm..."
sudo docker swarm leave --force