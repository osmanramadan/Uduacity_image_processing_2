import express from 'express';
import functions from './functions';

const validate = async (req:express.Request):Promise<string|null>=>{

    const imagename:string = req.query.filename as string;
    const widthvalue:string = req.query.width as string;
    const heightvalue:string = req.query.height as string;

    if (!(await functions.isimageavailable(imagename))) {
    return 'image not found choose one of these encenadaport,palmtunnel,palmtunnel,santamonica';
    }

    if (!widthvalue && !heightvalue) {
        return 'write your width and height in url';
    
    }
    const height:number = parseInt(heightvalue as string);
    if (Number.isNaN(height) || height < 1) {
    return 'height must be positive number';
    }
    const width:number = parseInt(widthvalue as string);
    if (Number.isNaN(width) || width < 1) {
    return  'width must be positive number';
    }

    const checkhsarp:null|string = await functions.resizeimage(req.query);
    if (checkhsarp)
    {   
    return 'there is error in processing';
    }
    
    return null;

};


export default validate;