
import express from 'express';
//import cors from 'cors';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config';
//
import Top from './pages/App';
import About from './pages/about';
import Test from './pages/Test'
import Login from './pages/Login'
import TestShow from './pages/Test/TestShow'; 
//
//import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//console.log(process.env);
//
const errorObj = {ret: "NG", messase: "Error"};

// API
app.use('/api/common', commonRouter);

//MPA
app.get('/login', (req: any, res: any) => {
  try {res.send(renderToString(Login()));} catch (error) { res.sendStatus(500);}
});
app.get('/test/show', (req: any, res: any) => {
  try {res.send(renderToString(TestShow()));} catch (error) { res.sendStatus(500);}
});
app.get('/test', (req: any, res: any) => {
  try {res.send(renderToString(Test()));} catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/', (req: any, res: any) => {
  try {
    res.send(renderToString(Top()));
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
//export const viteNodeApp = app;
