import express from 'express';

const routes = express.Router();

// Rotas
routes.get('/', (request, response) => {
  return response.json({ message: 'Basic Express API' })
});

export default routes;
