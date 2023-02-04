import express from 'express';
import images from './images';

const routes: express.Router = express.Router();
routes.use('/api/images', images);


routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    
    response.send(
      `<h1>image-processing-api</h1><p>Listening at
       <code><a href="/api/images">/api/images</a></code><br>
       <ul>
       <li>
         <a href="/api/images?filename=fjord">
         /api/images?filename=fjord
         </a>
       </li>
       <li>
         <a href="/api/images?filename=fjord&width=100&height=100">
         /api/images?filename=fjord&width=100&height=100
         </a>
       </li>
       </ul>
         `
    );
  }
);

export default routes;