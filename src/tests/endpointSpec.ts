import supertest from 'supertest';
import app from '../index';
import { promises as fs } from 'fs';
import path from 'path';

const request: supertest.SuperTest<supertest.Test> = supertest(app);
const path_of_thumb = path.resolve(__dirname, '../../images/thumb');

describe("end points==>", ()=>{

describe("main end point:", async ()=>{
it("test /", async ()=>{
  const response:supertest.Response = await request.get('/');

  expect(response.status).toBe(200);
});

});
describe("api/images:", async ()=>{
it("test api/images without any arg", async ()=>{
  const response:supertest.Response = await request.get('/api/images');
  expect(response.status).toBe(200);
});
it("test api/images with  arg", async ()=>{
  const response:supertest.Response = await request.get('/api/images?filename=fjord&width=200&height=200');
  expect(response.status).toBe(200);
});
it("test api/images with  wrong arg", async ()=>{
const response:supertest.Response = await request.get('/api/image?filename=fjord&width=-200&height=200');
  expect(response.status).not.toBe(200);
});

});

describe("not found end point:", async ()=>{
it("/api end point", async ()=>{

  const response:supertest.Response = await request.get('/api');

  expect(response.status).not.toBe(200);
});
});




});

afterAll(()=>{
  const pathofimage:string = path.resolve(path_of_thumb, 'fjord-200x200.jpg');

  try {
      fs.access(pathofimage);
      fs.unlink(pathofimage);
  } catch {
    console.log("can't  delete image ");
  }

});
