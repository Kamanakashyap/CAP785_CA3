const express = require('express');
const compression = require('compression');
const app = express();
const PORT = 3000;

// Enable Gzip compression
app.use(compression());

// Serve static files
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


