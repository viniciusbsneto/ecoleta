import express from 'express';

const app = express();

// Rotas
app.get('/', (request, response) => {
  response.json({ message: 'Basic Express API' })
});

app.listen(3333);
