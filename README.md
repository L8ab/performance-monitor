# Performance Monitor

A real-time performance monitoring tool for Node.js applications.

## Features

- CPU and memory monitoring
- Response time tracking
- System metrics collection
- RESTful API for metrics
- Middleware integration

## Tech Stack

- **Language**: Node.js
- **Monitoring**: Native Node.js APIs

## Project Structure

\`\`\`
performance-monitor/
├── src/
│   ├── monitor.js       # Core monitoring
│   ├── middleware/      # Express middleware
│   ├── utils/           # Logger
│   └── index.js         # Server
└── package.json
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`

## API Endpoints

- \`GET /metrics\` - Get performance metrics

## Integration

Add middleware to your Express app:

\`\`\`javascript
const monitorMiddleware = require('performance-monitor/middleware');
app.use(monitorMiddleware);
\`\`\`

---

**POWERED BY L8AB SYSTEMS**
