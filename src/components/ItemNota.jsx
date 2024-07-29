import React, { useState } from 'react';

// Componente para cada item da lista de Notas
function ItemNota({ Nota, indice, removerNota, atualizarNota }) {
  const [Editando, setEditando] = useState(false); // para saber se está no modo de edição
  const [NovoTexto, setNovoTexto] = useState(Nota.texto); // para armazenar o texto editado
  const [Editado, setEditado] = useState(false); // para saber se o item foi editado

  // Função para o modo de edição
  const iniciarEdicao = () => {
    setEditando(true);
  };

  // Função para salvar a edição
  const salvarEdicao = () => {
    if (NovoTexto.trim()) { // Verifica se o texto não está vazio
      atualizarNota({ ...Nota, texto: NovoTexto }); // Atualiza a Nota com o novo texto
      setEditando(false); // Sai do modo de edição
      setEditado(true); // Marca o item como editado
    }
  };

  return (
    <div className="nota-item">
      <div className="nota-text-container">
        <span className="nota-indice">{indice + 1}.</span>
        {Editando ? (
          <input type="text" value={NovoTexto} onChange={(e) => 
          setNovoTexto(e.target.value)} className="nota-input"/>
        ) : (
          <span className="nota-text">{Nota.texto}</span>
        )}
      </div>
      <div className="class-Nota">
        {Editado && <span className="editado">item editado</span>}
        <button onClick={Editando ? salvarEdicao : iniciarEdicao} className="edit-btn">
          {Editando ? (
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
        <button onClick={() => removerNota(Nota.id)} className="delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"/>
            <path fillRule="evenodd" d="M14 3.5V4h-1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H2v-.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5zM12.5 3h-9A.5.5 0 0 0 3 3.5V4h10v-.5a.5.5 0 0 0-.5-.5z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ItemNota;
