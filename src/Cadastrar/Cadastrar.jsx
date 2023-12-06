import React, { useState, useEffect } from "react";
import "./public/style.css";
import "./main/main.jsx";
import "./public/style.css";

export default function Todo() {
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [data, setData] = useState("");
  const [canal, setCanal] = useState("");
  const [playlist, setplaylist] = useState("");
  const [id, setId] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("Lista")) || [];
    const lastId =
      storedData.length > 0 ? storedData[storedData.length - 1].id : 0;
    return lastId + 1;
  });

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(options));
  }, [options]);

  const salvar = (e) => {
    e.preventDefault();

    if (descricao.trim() === "" || marcaDaCamisa.trim() === "") {
      return;
    }

    const newOption = {
      descricao: descricao,
      id: id,
      marcaDaCamisa: marcaDaCamisa,
    };

    setOptions([...options, newOption]);
    setId(id + 1);
    setDescricao("");
    setMarcaDaCamisa("");
  };

  const remover = (id) => {
    const updatedOptions = options.filter((item) => item.id !== id);
    setOptions(updatedOptions);
  };

  return (
    <div>
      <h1 className="d">Opções de Camisas</h1>

      <div className="add">
        <form onSubmit={salvar}>
          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />

          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Titulo"
          />

        <input
            value={artista}
            onChange={(e) => setArtista(e.target.value)}
            placeholder="Artista"
          />

        <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Data"
          />

        <input
            value={canal}
            onChange={(e) => setCanal(e.target.value)}
            placeholder="Canal"
          />

        <input
            value={playlist}
            onChange={(e) => setPlaylist(e.target.value)}
            placeholder="Playlist"
          />

<input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Id"
          />

          <button className="btn" type="submit">
            Adicionar
          </button>
        </form>
      </div>

      {options.map((option) => (
        <ul key={option.id}>
          <Link to={"/detalhe/${objeto.id}"}>
            <li>
              <p>{option.descricao}</p>
              <p>{option.marcaDaCamisa}</p>
              <button onClick={() => remover(option.id)}>Remover</button>
            </li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

