const monitor = require('../monitor');

const monitorMiddleware = (req, res, next) => {
  const startTime = monitor.startTimer();
  
  res.on('finish', () => {
    monitor.endTimer(startTime);
  });
  
  next();
};

module.exports = monitorMiddleware;
