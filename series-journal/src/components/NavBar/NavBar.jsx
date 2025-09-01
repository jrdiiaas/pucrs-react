import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";

function NavBar() {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <TheatersIcon sx={{ mr: 2 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Series Journal
                </Typography>
                <Box>
                    <Button color="inherit" component={RouterLink} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/sobre">
                        Sobre
                    </Button>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/cadastrar"
                    >
                        Cadastrar
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/lista">
                        Lista de Séries
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
