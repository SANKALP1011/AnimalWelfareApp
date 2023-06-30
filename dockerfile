# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Install the Expo CLI globally
RUN npm install -g expo-cli

# Copy the app files to the container
COPY . .

# Install app dependencies
RUN npm install

# Expose the Expo development port
EXPOSE 19000

# Start the Expo development server
CMD expo start --host tunnel
