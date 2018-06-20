import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import { twig } from 'twig';
import { caesar } from "./src/caesar";

// CONSTANTS
const app = express();
const PORT = 3000;

// SETUP
app.set('view engine', 'twig');
app.set('views', './views');

app.use(cors());
app.options('*', cors());
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
});

// ROUTES
app.get('/', (req: Request, res: Response) => {
  res.send(`<a href="/hello/42?one=%20and%20two">example</a>`);
});

app.get('/caesar/:input/:key', (req: Request, res: Response) => {
  let output: string = caesar(req.params['input'], req.params['key']);
  res.send(output);
});

app.get('/caesar', (req: Request, res: Response) => {
  res.render('caesar');
});