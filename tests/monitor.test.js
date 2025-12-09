const monitor = require('../src/monitor');

describe('Performance Monitor', () => {
  test('getSystemMetrics should return metrics', () => {
    const metrics = monitor.getSystemMetrics();
    expect(metrics).toHaveProperty('cpu');
    expect(metrics).toHaveProperty('memory');
  });
  
  test('should track response time', () => {
    const start = monitor.startTimer();
    setTimeout(() => {
      const duration = monitor.endTimer(start);
      expect(duration).toBeGreaterThan(0);
    }, 10);
  });
});
