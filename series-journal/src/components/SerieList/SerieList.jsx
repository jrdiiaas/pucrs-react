import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    CircularProgress,
    Grid,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./SerieList.css";

function SerieList() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchSeries = async () => {
        try {
            setLoading(true);
            const response = await api.get("/series");
            setSeries(response.data);
            setError(null);
        } catch (err) {
            setError("Falha ao carregar as séries.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSeries();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir esta série?")) {
            try {
                await api.delete(`/series/${id}`);
                fetchSeries(); // Re-fetch para atualizar a lista
            } catch (err) {
                alert("Erro ao excluir a série.");
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/editar/${id}`);
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Grid container spacing={3}>
            {series.map((serie) => (
                <Grid item xs={12} sm={6} md={4} key={serie.id}>
                    <Card className="serie-card">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {serie.titulo}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {serie.categoria} - {serie.temporadas}{" "}
                                Temporadas
                            </Typography>
                            <Typography variant="body2">
                                <strong>Diretor:</strong> {serie.diretor}
                                <br />
                                <strong>Produtora:</strong> {serie.produtora}
                                <br />
                                <strong>Lançamento:</strong>{" "}
                                {new Date(
                                    serie.lancamento,
                                ).toLocaleDateString()}
                                <br />
                                <strong>Assistido em:</strong>{" "}
                                {new Date(
                                    serie.assistidoEm,
                                ).toLocaleDateString()}
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                p: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <IconButton
                                onClick={() => handleEdit(serie.id)}
                                aria-label="editar"
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleDelete(serie.id)}
                                aria-label="deletar"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default SerieList;
