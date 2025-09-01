import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";

import "./App.css";

function App() {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <NavBar />
                <Container component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sobre" element={<AboutPage />} />
                        <Route path="/lista" element={<ListPage />} />
                        <Route path="/cadastrar" element={<FormPage />} />
                        <Route path="/editar/:id" element={<FormPage />} />
                    </Routes>
                </Container>
            </Box>
        </Router>
    );
}

export default App;
