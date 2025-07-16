import { db } from '../utils/server.js';

export const criarTabelaSites = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS sites (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao TEXT,
      preco DECIMAL(10, 2) NOT NULL,
      imagem VARCHAR(500),
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(query, (err) => {
    if (err) {
      console.error("Erro ao criar tabela 'sites':", err);
    } else {
      console.log("Tabela 'sites' verificada/criada com sucesso.");
    }
  });
};

export const listarSites = (callback) => {
  db.query("SELECT * FROM sites", callback);
};

export const adicionarSite = (site, callback) => {
  const { nome, descricao, preco, imagem } = site;
  db.query(
    "INSERT INTO sites (nome, descricao, preco, imagem) VALUES (?, ?, ?, ?)",
    [nome, descricao, preco, imagem],
    callback
  );
};

export const deletarSite = (id, callback) => {
  db.query("DELETE FROM sites WHERE id = ?", [id], callback);
};

export const atualizarSite = (id, site, callback) => {
  const { nome, descricao, preco, imagem } = site;
  db.query(
    "UPDATE sites SET nome = ?, descricao = ?, preco = ?, imagem = ? WHERE id = ?",
    [nome, descricao, preco, imagem, id],
    callback
  );
};
