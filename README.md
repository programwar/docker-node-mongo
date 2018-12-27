# Docker Node MongoDB Example

> Simple example of a dockerized Node/Mongo app

> Original respo was modified to create a restfuf API based on https://github.com/carlosazaustre/node-api-rest-example

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build
```
