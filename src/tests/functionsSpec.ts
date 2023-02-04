
import { promises as fs } from 'fs';
import path from 'path';
import functions from '../controllers/functions';
const path_of_thumb = path.resolve(__dirname, '../../images/thumb');


describe("check functions", async ()=>{

it("check => checkimageexist()", async ()=>{
    const foundornot:boolean = await functions.isimageavailable('fjord');
    expect(foundornot).toBeTrue();
});



it("check =>createthumb()", async ()=>{

const sharpResponse:null|string = await functions.resizeimage({filename:'fjord', width:'300', height:'400'});
expect(sharpResponse).toBeNull();

});

it("check =>createthumb() with error", async ()=>{
const sharpResponse:null|string = await functions.resizeimage({filename:'foo', width:'300', height:'400'});
expect(sharpResponse).toThrowError;

});

});

afterAll(()=>{
    const pathofimage:string = path.resolve(path_of_thumb, 'fjord-300x400.jpg');
  
    try {
        fs.access(pathofimage);
        fs.unlink(pathofimage);
    } catch {
      console.log("can't  delete image ");
    }
  
  });
  