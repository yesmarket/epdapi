# Overview
Dummy APIs for FXL EPD project

# Configuration
hosts
.env

# Build
```
docker-compose -f .\docker-compose.yml -f .\docker-compose.dev.yml up --build
```
or if you've already built the docker images;
```
docker-compose up
```
