import React from "react";
import { Typography, Paper } from "@mui/material";
import "./PageStyles.css";

function AboutPage() {
    return (
        <Paper className="page-paper">
            <Typography variant="h4" component="h1" gutterBottom>
                Sobre o Projeto
            </Typography>
            <Typography variant="body1">
                Este é um projeto de gerenciamento de séries assistidas
                desenvolvido com React para a disciplina Desenvolvimento de
                Sistemas Frontend.
            </Typography>
            <Typography variant="body1">
                Aqui você pode cadastrar, visualizar, editar e excluir séries
                assistidas.
            </Typography>
        </Paper>
    );
}

export default AboutPage;
