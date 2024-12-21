// Importation d'Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Utiliser le port fourni par l'environnement (si sur Render) ou 3000 par défaut

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Définir une route API pour renvoyer une citation
app.get('/api/quote', (req, res) => {
  // Exemple de citation
  const quote = {
    content: "La vie est ce qui se passe quand tu es occupé à faire d'autres projets.",
    author: "John Lennon"
  };
  res.json(quote);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
