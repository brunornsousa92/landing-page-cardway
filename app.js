const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.post('/submit', (req, res) => {
    const { nome, email, mensagem } = req.body;
    res.send(`Obrigado, ${nome}! Recebemos sua mensagem.`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
