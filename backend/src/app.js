const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend working' });
});


app.listen(3000,(req,res)=>{
    console.log("I am working bro");
})
