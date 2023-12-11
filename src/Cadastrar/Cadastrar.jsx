import React, { useState, useEffect } from "react";
import Menu from "../Componentes/Card";

export default function Cadastrar() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [canal, setCanal] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState(
    listaLocalStorage.length > 0 ? listaLocalStorage[listaLocalStorage.length - 1].id + 1 : 1
  );
  const [link, setLink] = useState("");
  const [lista, setLista] = useState(listaLocalStorage);

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();

    if (!titulo || !descricao || !canal || !playlist || !data) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLista([
      ...lista,
      {
        titulo,
        descricao,
        canal,
        playlist,
        data,
        id,
        link,
      },
    ]);

    setTitulo("");
    setDescricao("");
    setCanal("");
    setPlaylist("");
    setData("");
    setId(id + 1);
    setLink("");
  };

  return (
    <div>
      <Menu />
      <div>
      <form onSubmit={salvar}>
          <h2>Título:</h2>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

          <h2>Descrição:</h2>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

          <h2>Canal:</h2>
          <input type="text" value={canal} onChange={(e) => setCanal(e.target.value)} />

          <h2>Playlist:</h2>
          <input type="text" value={playlist} onChange={(e) => setPlaylist(e.target.value)} />

          <h2>Data:</h2>
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} />

          <h2>Link:</h2>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
