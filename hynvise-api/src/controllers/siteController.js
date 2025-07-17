const {
  listarSites,
  adicionarSite,
  deletarSite,
  atualizarSite,
} = require("../models/Site.js");

const getSites = (req, res) => {
  listarSites((err, resultados) => {
    if (err) return res.status(500).json({ erro: "Erro ao buscar sites" });
    res.json(resultados);
  });
};

const postSite = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ erro: "Imagem do site é obrigatória" });
  }

  const { nome, descricao, preco } = req.body;
  const imagem = req.file.filename;

  const novoSite = { nome, descricao, preco, imagem };

  adicionarSite(novoSite, (err, resultado) => {
    if (err) return res.status(500).json({ erro: "Erro ao adicionar site" });
    res.status(201).json({
      mensagem: "Site adicionado com sucesso",
      id: resultado.insertId,
    });
  });
};

const deleteSite = (req, res) => {
  const { id } = req.params;
  deletarSite(id, (err) => {
    if (err) return res.status(500).json({ erro: "Erro ao deletar site" });
    res.json({ mensagem: "Site deletado com sucesso" });
  });
};

const putSite = (req, res) => {
  const { id } = req.params;
  atualizarSite(id, req.body, (err) => {
    if (err) return res.status(500).json({ erro: "Erro ao atualizar site" });
    res.json({ mensagem: "Site atualizado com sucesso" });
  });
};

// Exportação padrão para CommonJS
module.exports = {
  getSites,
  postSite,
  deleteSite,
  putSite,
};
