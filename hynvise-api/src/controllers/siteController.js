import {
  listarSites,
  adicionarSite,
  deletarSite,
  atualizarSite,
} from "../models/Site.js";

export const getSites = (req, res) => {
  listarSites((err, resultados) => {
    if (err) return res.status(500).json({ erro: "Erro ao buscar sites" });
    res.json(resultados);
  });
};

export const postSite = (req, res) => {
  adicionarSite(req.body, (err, resultado) => {
    if (err) return res.status(500).json({ erro: "Erro ao adicionar site" });
    res.status(201).json({ mensagem: "Site adicionado com sucesso", id: resultado.insertId });
  });
};

export const deleteSite = (req, res) => {
  const { id } = req.params;
  deletarSite(id, (err) => {
    if (err) return res.status(500).json({ erro: "Erro ao deletar site" });
    res.json({ mensagem: "Site deletado com sucesso" });
  });
};

export const putSite = (req, res) => {
  const { id } = req.params;
  atualizarSite(id, req.body, (err) => {
    if (err) return res.status(500).json({ erro: "Erro ao atualizar site" });
    res.json({ mensagem: "Site atualizado com sucesso" });
  });
};
