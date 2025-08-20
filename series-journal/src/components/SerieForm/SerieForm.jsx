import React, { useState, useEffect } from "react";
import "./SerieForm.css";

const initialState = {
    titulo: "",
    temporadas: "",
    lancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    assistidoEm: "",
};

function SerieForm({ onSubmit, serieInicial, onCancel }) {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (serieInicial) {
            setFormData(serieInicial);
        } else {
            setFormData(initialState);
        }
    }, [serieInicial]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página [cite: 392-393]
        // Validação básica
        for (const key in formData) {
            if (formData[key] === "" && key !== "id") {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }
        }
        onSubmit(formData);
        setFormData(initialState);
    };

    return (
        <div className="form-container">
            <h2>{serieInicial ? "Editar Série" : "Cadastrar Séries"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Número de Temporadas:</label>
                    <input
                        type="number"
                        name="temporadas"
                        value={formData.temporadas}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Data de Lançamento da Temporada:</label>
                    <input
                        type="date"
                        name="lancamento"
                        value={formData.lancamento}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Diretor:</label>
                    <input
                        type="text"
                        name="diretor"
                        value={formData.diretor}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Produtora:</label>
                    <input
                        type="text"
                        name="produtora"
                        value={formData.produtora}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Categoria:</label>
                    <input
                        type="text"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Data em que assistiu:</label>
                    <input
                        type="date"
                        name="assistidoEm"
                        value={formData.assistidoEm}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">
                        {serieInicial ? "Atualizar Série" : "Cadastrar Série"}
                    </button>
                    {serieInicial && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="cancel-btn"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default SerieForm;