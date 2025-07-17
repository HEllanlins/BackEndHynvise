// hynvise-api/src/utils/server.js

const express = require('express');
const cors = require('cors');
const app = express();

// Importar o router corretamente
const siteRoutes = require('../routes/siteRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API Hynvise rodando com sucesso!');
});

// Usar as rotas de site
app.use('/api', siteRoutes); // Agora /api/sites funcionará

// Subir o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
