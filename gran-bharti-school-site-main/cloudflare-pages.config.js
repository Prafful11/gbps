// Cloudflare Pages configuration
module.exports = {
  build: {
    command: "npm install && npm run build",
    directory: "dist",
    environment: {
      NODE_VERSION: "18"
    }
  },
  routes: [
    { pattern: "/*", destination: "/index.html" }
  ]
}; 