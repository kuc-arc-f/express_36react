
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import basicAuth  from "express-basic-auth";
const app = express();
//
import Top from './pages/App';
import About from './pages/about';
import Test from './pages/Test';
import TestShow from './pages/Test/TestShow';
//import Contact from './pages/contact';';
//
//import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
//
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//console.log("VITE_API_URL=", import.meta.env.VITE_API_URL);
console.log(import.meta.env);
//
app.use(basicAuth({
  users: { "test": "1111" },
  challenge: true,
}));
//
const errorObj = {ret: "NG", messase: "Error"};

// route
//app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);

//MPA
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
if (import.meta.env.PROD) {
  app.listen(3000);
}
console.log('start');

export const viteNodeApp = app;