const os = require('os');
const { performance } = require('perf_hooks');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      cpu: [],
      memory: [],
      responseTime: []
    };
  }
  
  getSystemMetrics() {
    return {
      cpu: {
        usage: process.cpuUsage(),
        loadAverage: os.loadavg()
      },
      memory: {
        total: os.totalmem(),
        free: os.freemem(),
        used: os.totalmem() - os.freemem(),
        processMemory: process.memoryUsage()
      },
      uptime: os.uptime(),
      platform: os.platform()
    };
  }
  
  startTimer() {
    return performance.now();
  }
  
  endTimer(startTime) {
    const duration = performance.now() - startTime;
    this.metrics.responseTime.push(duration);
    return duration;
  }
  
  getAverageResponseTime() {
    if (this.metrics.responseTime.length === 0) return 0;
    const sum = this.metrics.responseTime.reduce((a, b) => a + b, 0);
    return sum / this.metrics.responseTime.length;
  }
  
  getMetrics() {
    return {
      system: this.getSystemMetrics(),
      averageResponseTime: this.getAverageResponseTime(),
      totalRequests: this.metrics.responseTime.length
    };
  }
}

module.exports = new PerformanceMonitor();
