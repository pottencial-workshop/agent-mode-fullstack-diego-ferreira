import express from 'express';
import productsRouter from './routes/products.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.use('/products', productsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('[ERROR]', err); // eslint-disable-line no-console
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Products API rodando na porta ${PORT}`); // eslint-disable-line no-console
});
