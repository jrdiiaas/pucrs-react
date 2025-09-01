import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
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

function SerieForm() {
    const [formData, setFormData] = useState(initialState);
    const { id } = useParams(); // Hook para pegar o ID da URL [cite: 11977, 12386]
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    useEffect(() => {
        if (isEditing) {
            const fetchSerie = async () => {
                try {
                    const response = await api.get(`/series/${id}`);
                    // Formata as datas para o formato yyyy-MM-dd que o input[type=date] espera
                    const formattedData = {
                        ...response.data,
                        lancamento: response.data.lancamento.split("T")[0],
                        assistidoEm: response.data.assistidoEm.split("T")[0],
                    };
                    setFormData(formattedData);
                } catch (error) {
                    console.error("Falha ao buscar a série para edição", error);
                }
            };
            fetchSerie();
        }
    }, [id, isEditing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação básica
        for (const key in initialState) {
            if (!formData[key]) {
                alert(`O campo "${key}" é obrigatório.`);
                return;
            }
        }

        try {
            if (isEditing) {
                await api.put(`/series/${id}`, formData);
                alert("Série atualizada com sucesso!");
            } else {
                await api.post("/series", formData);
                alert("Série cadastrada com sucesso!");
            }
            navigate("/lista");
        } catch (error) {
            alert("Ocorreu um erro ao salvar a série.");
            console.error(error);
        }
    };

    return (
        <Paper component="form" onSubmit={handleSubmit} className="form-paper">
            <Typography variant="h4" gutterBottom>
                {isEditing ? "Editar Série" : "Cadastrar Série"}
            </Typography>
            <TextField
                label="Título"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Número de Temporadas"
                name="temporadas"
                type="number"
                value={formData.temporadas}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Data de Lançamento"
                name="lancamento"
                type="date"
                value={formData.lancamento}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                label="Diretor"
                name="diretor"
                value={formData.diretor}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Produtora"
                name="produtora"
                value={formData.produtora}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Data em que assistiu"
                name="assistidoEm"
                type="date"
                value={formData.assistidoEm}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 1,
                }}
            >
                <Button variant="outlined" onClick={() => navigate("/lista")}>
                    Cancelar
                </Button>
                <Button type="submit" variant="contained">
                    {isEditing ? "Salvar" : "Cadastrar"}
                </Button>
            </Box>
        </Paper>
    );
}

export default SerieForm;
