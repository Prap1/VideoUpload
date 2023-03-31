const express = require('express');
const videoRouter = require('./routes/video');

const app = express();
const port = 3000;

app.use('/videos', videoRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
