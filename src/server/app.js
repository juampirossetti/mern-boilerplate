import express from 'express';

const app = express();

app.get('/', (req, res) => {
   res.send('Hello Juampi!');
});

app.listen(3000, () => {
   console.log('MERN Boilerplate listening on port 3000!');
});