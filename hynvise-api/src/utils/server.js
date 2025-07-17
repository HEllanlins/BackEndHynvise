// src/server.js

const express = require('express');
const cors = require('cors');
const siteRoutes = require('../routes/siteRoutes'); // Sem extensão .js

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/sites', siteRoutes); // Todas as rotas de sites ficam sob /api/sites

// Rota de teste
app.get('/', (req, res) => {
  res.send('API Hynvise rodando com sucesso!');
});

// Subir o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
