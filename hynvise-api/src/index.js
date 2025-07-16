import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./utils/server.js";
import siteRoutes from "./routes/siteRoutes.js";
import { criarTabelaSites } from "./models/Site.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Teste da conexão
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão com o banco de dados estabelecida com sucesso!");
  criarTabelaSites(); // Cria a tabela se não existir
});

// Rotas
app.use("/api", siteRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
