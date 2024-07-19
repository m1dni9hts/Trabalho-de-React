import React, { useState } from 'react';

// Componente para cada item da lista de ideias
function ItemIdeia({ ideia, indice, removerIdeia, atualizarIdeia }) {
  const [estaEditando, setEstaEditando] = useState(false); // para saber se está no modo de edição
  const [textoEditado, setTextoEditado] = useState(ideia.texto); // para armazenar o texto editado
  const [foiEditado, setFoiEditado] = useState(false); // para saber se o item foi editado

  // Função para o modo de edição
  const iniciarEdicao = () => {
    setEstaEditando(true);
  };

  // Função para salvar a edição
  const salvarEdicao = () => {
    if (textoEditado.trim()) { // Verifica se o texto não está vazio
      atualizarIdeia({ ...ideia, texto: textoEditado }); // Atualiza a ideia com o novo texto
      setEstaEditando(false); // Sai do modo de edição
      setFoiEditado(true); // Marca o item como editado
    }
  };

  return (
    <div className="idea-item">
      {estaEditando ? (
        <input type="text" value={textoEditado} onChange={(e) => 
        setTextoEditado(e.target.value)} className="idea-input"/>
      ) : (
        <h3 className="idea-text">{indice + 1}. {ideia.texto}</h3>
      )}
      <div className="class-ideia">
        {foiEditado && <span className="editado">item editado</span>}
        <button onClick={estaEditando ? salvarEdicao : iniciarEdicao} className="edit-btn">
          {estaEditando ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 13l4 4L19 7l-1.41-1.41L9 14.17l-2.59-2.58L5 13z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>
          )}
        </button>
        <button onClick={() => removerIdeia(ideia.id)} className="delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ItemIdeia;
