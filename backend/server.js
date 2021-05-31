import express from 'express';
import data from './data.js'

const app = express();

app.get('/api/product', (req, res) => {
    res.send(data.product);
});

app.get('/', (req,res) =>{
    res.send('Server is ready');
});
const port = process.env.PORT || 5001;
app.listen(5001, () => {
    console.log(`Server at http://localhost:${port}`);
});
