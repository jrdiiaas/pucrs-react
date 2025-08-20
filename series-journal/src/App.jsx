import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SerieList from "./components/SerieList/SerieList";
import SerieForm from "./components/SerieForm/SerieForm";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
    // Estado para armazenar a lista de séries
    const [series, setSeries] = useState([
        {
            id: 1,
            titulo: "La Casa de Papel",
            temporadas: 3,
            lancamento: "2020-05-20",
            diretor: "Álex Pina",
            produtora: "Netflix",
            categoria: "Drama",
            assistidoEm: "2021-05-10",
        },
        {
            id: 2,
            titulo: "Breaking Bad",
            temporadas: 5,
            lancamento: "2008-01-22",
            diretor: "Vince Gilligan",
            produtora: "Sony Pictures",
            categoria: "Drama",
            assistidoEm: "2015-01-20",
        },
        {
            id: 3,
            titulo: "Friends",
            temporadas: 10,
            lancamento: "1994-09-22",
            diretor: "Kevin S. Bright",
            produtora: "Warner Bros",
            categoria: "Comédia",
            assistidoEm: "2010-10-10",
        },
    ]);

    // Estado para controlar a página/componente a ser exibido
    const [currentPage, setCurrentPage] = useState("home");
    // Estado para armazenar a série que está sendo editada
    const [serieParaEditar, setSerieParaEditar] = useState(null);

    // Função para adicionar uma nova série
    const handleAddSerie = (novaSerie) => {
        setSeries([...series, { ...novaSerie, id: Date.now() }]); // Garante imutabilidade e ID único
        setCurrentPage("list"); // Redireciona para a lista após adicionar
    };

    // Função para atualizar uma série existente
    const handleUpdateSerie = (serieAtualizada) => {
        // Usa map para criar um novo array com o item atualizado (imutabilidade)
        setSeries(
            series.map((s) =>
                s.id === serieAtualizada.id ? serieAtualizada : s,
            ),
        );
        setSerieParaEditar(null); // Limpa o estado de edição
        setCurrentPage("list"); // Redireciona para a lista
    };

    // Função para deletar uma série
    const handleDeleteSerie = (id) => {
        // Usa filter para criar um novo array sem o item deletado (imutabilidade)
        setSeries(series.filter((s) => s.id !== id));
    };

    // Função para preparar a edição de uma série
    const handleEditSerie = (serie) => {
        setSerieParaEditar(serie);
        setCurrentPage("form"); // Leva para o formulário de edição
    };

    // Função para cancelar a edição e voltar para a lista
    const handleCancelEdit = () => {
        setSerieParaEditar(null);
        setCurrentPage("list");
    };

    // Renderização condicional da página atual
    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <HomePage />;
            case "about":
                return <AboutPage />;
            case "list":
                return (
                    <SerieList
                        series={series}
                        onDelete={handleDeleteSerie}
                        onEdit={handleEditSerie}
                        onAddNew={() => setCurrentPage("form")}
                    />
                );
            case "form":
                return (
                    <SerieForm
                        onSubmit={
                            serieParaEditar ? handleUpdateSerie : handleAddSerie
                        }
                        serieInicial={serieParaEditar}
                        onCancel={handleCancelEdit}
                    />
                );
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <NavBar onNavigate={setCurrentPage} />
            </header>
            <main className="App-content">{renderPage()}</main>
        </div>
    );
}

export default App;