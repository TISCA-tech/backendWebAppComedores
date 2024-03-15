require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

// First endpoint of the webapp (a dummy for now)
app.get('/firstendpoint', (req, res) => {
    res.status(200).json({
        username: 'AcapulcoGold',
        id: 420,
        mail: 'dummymail@gmail.com'
      });
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});