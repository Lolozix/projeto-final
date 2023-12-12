import React, { useState, useEffect } from "react";
import Menu from '../Componentes/Menu';
import { useNavigate } from "react-router-dom";

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
  const [url, setUrl] = useState("");
  const [lista, setLista] = useState(listaLocalStorage);

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const navigate = useNavigate("")

  const salvar = async (e) => {
    e.preventDefault();

    if (!titulo || !descricao || !canal || !playlist || !data) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    await setLista([
      ...lista,
      {
        titulo,
        descricao,
        canal,
        playlist,
        data,
        id,
        url
      },
    ]);

    setTitulo("");
    setDescricao("");
    setCanal("");
    setPlaylist("");
    setData("");
    setId(id + 1);
    setUrl("");
    navigate("/")
   
  };

  return (
    <div>
      <Menu />
      <div class="div">
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

          <h2>Url:</h2>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
