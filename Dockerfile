FROM node:10

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

# Create directory inside container
RUN mkdir -p /workdir/output
WORKDIR /workdir

# Install dependencies if any change
COPY package.json ./

# Copy test project
COPY . ./

RUN npm install
RUN npm i node-jq

# Execute tests
ENTRYPOINT sh healthcheck.sh
