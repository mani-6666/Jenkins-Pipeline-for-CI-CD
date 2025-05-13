const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, Elevate Labs, This is After pushing code commits to GitHub'));
app.listen(3000, () => console.log('App running on port 3000'));
