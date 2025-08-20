import React from "react";
import "./SerieList.css";

function SerieList({ series, onDelete, onEdit, onAddNew }) {
    return (
        <div className="list-container">
            <h2>Lista de séries</h2>
            <div className="series-list">
                {series.map((serie) => (
                    <div className="serie-item" key={serie.id}>
                        <span>
                            - {serie.titulo} - {serie.temporadas} temporadas -{" "}
                            {serie.lancamento} - {serie.diretor} -{" "}
                            {serie.produtora} - {serie.categoria} -{" "}
                            {serie.assistidoEm}
                        </span>
                        <div className="serie-actions">
                            <button onClick={() => onEdit(serie)}>
                                Editar
                            </button>
                            <button
                                onClick={() => onDelete(serie.id)}
                                className="delete-btn"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={onAddNew} className="add-new-btn">
                Cadastrar nova série
            </button>
        </div>
    );
}

export default SerieList;