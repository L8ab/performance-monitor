const express = require('express');
const monitor = require('./monitor');
const monitorMiddleware = require('./middleware/monitorMiddleware');

const app = express();
app.use(monitorMiddleware);

app.get('/metrics', (req, res) => {
  res.json(monitor.getMetrics());
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Performance Monitor running on port ${PORT}`);
});
