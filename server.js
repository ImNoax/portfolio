// Importation d'Express
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;  // Utiliser le port fourni par l'environnement (si sur Render) ou 3000 par défaut
const axios = require('axios');

// Middleware pour gérer les requêtes JSON
app.use(cors());

// Définir une route API pour renvoyer une citation
app.get('/api/advice', async (req, res) => {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const quote = response.data.slip;
        console.log(quote);
        res.json({
          content: quote.advice,
        });

      } catch (error) {
        console.error('Erreur lors de l\'appel à l\'API de citation:', error);
        res.status(500).json({ error: 'Impossible de charger une citation. Veuillez réessayer.' });
      }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
