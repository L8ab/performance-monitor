const fs = require('fs');
const path = require('path');

class Logger {
  constructor(logFile = 'monitor.log') {
    this.logFile = logFile;
  }
  
  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logMessage);
    console.log(logMessage.trim());
  }
  
  info(message) {
    this.log('INFO', message);
  }
  
  error(message) {
    this.log('ERROR', message);
  }
  
  warn(message) {
    this.log('WARN', message);
  }
}

module.exports = new Logger();
