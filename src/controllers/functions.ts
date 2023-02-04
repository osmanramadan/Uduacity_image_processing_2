import sharpImage from '../sharp';
import path from 'path';
import { promises as fs } from 'fs';
import  express from 'express';
interface reqparam {
    filename?: string;
    width?: string;
    height?: string;
    
  }

const fullpath = path.resolve(__dirname, '../../images/full');
const thumbpath = path.resolve(__dirname, '../../images/thumb');
  
export default class functions {

    static async isimageavailable(imagename:string):Promise<boolean> {
    const availableimages = ['fjord', 'encenadaport', 'palmtunnel', 'palmtunnel', 'santamonica'];

    for (let i = 0; i < availableimages.length;i++ ) {
    if (availableimages[i] === imagename) {
        
        return true;
    }
    
    }
    return false;
    }
    
    static async getpath(req:express.Request):Promise<string|boolean> {
    const checkpath = path.resolve(thumbpath, `${req.query.filename}-${req.query.width}x${req.query.height}.jpg`);
    try {
        await fs.access(checkpath);
        return checkpath;
    } catch {
     return false;
    }

    }

    static async resizeimage(param:reqparam):Promise<null|string> {
        const source:string = path.resolve(fullpath, `${param.filename}.jpg`);
        const target:string = path.resolve(thumbpath, `${param.filename}-${param.width}x${param.height}.jpg`);
    return await sharpImage({
        source: source,
        target: target,
        width:parseInt(param.width as string ),
        height:parseInt(param.height as string ),
    });
    }



}