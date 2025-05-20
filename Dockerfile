# Use Node base image
FROM node:22

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Generate Prisma client (MUST have schema.prisma already copied)
RUN npx prisma generate

# Build NestJS app
RUN npm run build

# Expose API port
EXPOSE 3000

# Start app (can use start:dev for dev)
CMD ["npm", "run", "start:prod"]
