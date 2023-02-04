import express from 'express';
import routes from './controllers/main';
const app: express.Application = express();

const port = 3000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
  const url = `http://localhost:${port}`;
  console.log(` open ${url} to review the project ...`);
});

export default app;
