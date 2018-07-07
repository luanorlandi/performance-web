# Project of Web Performance Optimization course

## Scripts

```
# install dependencies
yarn

# run developement mode
yarn start

# build to dist/
yarn build

# run builded version
yarn serve

# build docker image with nginx
docker build -t nginx-config .

# run docker container to serve dist/
docker run --name performance-web -d -p 8080:80 nginx-config

# full docker restart with image build
docker stop performance-web; docker rm performance-web; docker rmi nginx-config; docker build -t nginx-config . && docker run --name performance-web -d -p 8080:80 nginx-config
```
