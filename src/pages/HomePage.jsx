import React from "react";
import { Typography, Paper } from "@mui/material";
import "./PageStyles.css";

function HomePage() {
    return (
        <Paper className="page-paper">
            <Typography variant="h4" component="h1" gutterBottom>
                Página Inicial
            </Typography>
            <Typography variant="body1">
                Bem-vindo ao projeto CRUD de séries!
            </Typography>
            <Typography variant="body1">
                Gerencie séries assistidas de uma forma fácil e intuitiva.
            </Typography>
        </Paper>
    );
}

export default HomePage;
