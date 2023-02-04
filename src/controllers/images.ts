import express from 'express';
import validate from './santize';
import functions from './functions';

const images: express.Router = express.Router();

images.get('/', async (req:express.Request, res:express.Response)=>{
    
    const check = await validate(req);
    

    if (check) {
        res.send(check);
        return ;
    }
    
    const pathofimage:string|boolean = await functions.getpath(req);
     if (pathofimage) {
     res.sendFile(pathofimage as string);
     } else {
    res.send("image not found");
     }
    
    
    
}


);

export default images;
