#!/usr/bin/env bash

echo "----- Removing Stack"
sudo docker stack rm docks-swarm-demo

echo "----- Removing registry..."
sudo docker service rm demo_registry

echo "----- Leaving swarm..."
sudo docker swarm leave --force