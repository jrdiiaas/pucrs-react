import React from "react";
import "./NavBar.css";

function NavBar({ onNavigate }) {
    const handleNavClick = (page) => {
        onNavigate(page);
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#" onClick={() => handleNavClick("home")}>
                        Página Inicial
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleNavClick("about")}>
                        Sobre
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleNavClick("form")}>
                        Cadastrar Séries
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleNavClick("list")}>
                        Lista de Séries
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;