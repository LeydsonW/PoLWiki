import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import MapsPage from './pages/MapsPage';
import QuestsPage from './pages/QuestsPage';
import SkinsPage from './pages/SkinsPage';
import SystemsPage from './pages/SystemsPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/pokemons" element={<PokemonsPage />} />
            <Route path="/pokemons/:id" element={<PokemonDetailPage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/quests" element={<QuestsPage />} />
            <Route path="/skins" element={<SkinsPage />} />
            <Route path="/systems" element={<SystemsPage />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;