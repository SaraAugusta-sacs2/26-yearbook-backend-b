import express from 'express';
import logger from './middlewares/logger.js';                // importa o Express
import alunosRouter from './routes/alunos.js'; // importa o router de alunos <- NOVO

const app = express();      // cria a aplicação Express
const PORT = 3000;          // porta do servidor

app.use(express.json());    // middleware que parseia JSON do body das requisições  <- NOVO
app.use(logger);

// rotas
app.get('/', (req, res) => {
  res.json({ mensagem: 'Yearbook API está no ar! 🎓' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.use('/alunos', alunosRouter);


if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

export default app;