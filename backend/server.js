const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/api/auth',require('./routes/auth'))

app.get('/', (req, res)=>
res.send('hello')
)

app.listen(port,()=>{
  console.log(`app is listning at http://localhost:${port}`)
});
