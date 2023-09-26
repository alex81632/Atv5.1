const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors'); // Importe o módulo cors

// Configurar o servidor para lidar com dados JSON
app.use(express.json());

// Use o middleware cors para permitir solicitações de origens diferentes
app.use(cors());

// Dados das cidades (exemplo)
const citiesData = {
  city1: {
    name: 'Fortaleza-CE',
    photo: 'https://cdn2.revistahoteis.com.br/wp-content/uploads/2018/07/PRAIA-DO-MEIRELES_FORTALEZA_CE-Jade-Queiroz-MTUR.jpg',
    description: 'Fortaleza é a capital do estado do Ceará, no Nordeste brasileiro. A cidade é conhecida por suas praias, com falésias vermelhas, palmeiras, dunas e lagoas.',
  },
  city2: {
    name: 'Mossoró-RN',
    photo: 'https://enacei.uern.br/images/speasyimagegallery/albums/2/images/plano-de-saude-mossoro.jpg',
    description: 'Mossoró é um município brasileiro no interior do estado do Rio Grande do Norte, capital do Semiárido brasileiro. Ocupa uma área de aproximadamente 2 100 km², sendo o maior município do estado em área, estando distante 281 quilômetros da capital estadual, Natal.',
  },
  // Adicione mais cidades conforme necessário
};

// Rota para obter dados de uma cidade
app.get('/cidade/:id', (req, res) => {
  const cityId = req.params.id;
  const cityData = citiesData[cityId];
  if (cityData) {
    res.json(cityData);
  } else {
    res.status(404).json({ error: 'Cidade não encontrada' });
  }
});

// Middleware para tratar erros 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
