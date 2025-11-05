# development stage
# Use offiecail Node.js Apline image as base image
FROM node:22-bookworm

# Set the working directory
WORKDIR /app

# Copy the Package.json file to the working directory
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# install all dependencies
RUN \
  if [ -f yarn.lock ]; then \
    yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
    npm ci; \
  fi

# copy the content of the local directory to the working directory
COPY . .

# Start the app in development
CMD ["yarn", "dev"]