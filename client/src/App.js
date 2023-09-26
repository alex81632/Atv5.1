import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const serverPort = process.env.REACT_APP_SERVER_PORT || 5000; // Porta do servidor

  const handleCityClick = async (cityId) => {
    try {
      const response = await fetch(`http://localhost:${serverPort}/cidade/${cityId}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar dados da cidade');
      }
      const cityData = await response.json();
      setSelectedCity(cityData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseCity = () => {
    setSelectedCity(null);
  };

  return (
    <div className="App">
      <h1>Lista de Cidades</h1>
      <ul>
        <li onClick={() => handleCityClick('city1')}>Cidade 1</li>
        <li onClick={() => handleCityClick('city2')}>Cidade 2</li>
        {/* Adicione mais cidades conforme necessário */}
      </ul>
      {selectedCity && (
        <div className="city-info">
          <button onClick={handleCloseCity}>Fechar</button>
          <h2>{selectedCity.name}</h2>
          <img src={selectedCity.photo} alt={selectedCity.name} />
          <p>{selectedCity.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
