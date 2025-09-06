import React from "react";
import SerieList from "../components/SerieList/SerieList";
import { Typography } from "@mui/material";

function ListPage() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Lista de Séries Assistidas
            </Typography>
            <SerieList />
        </div>
    );
}

export default ListPage;
