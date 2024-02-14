import {useState, useEffect}  from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
//mport { Link } from 'react-router-dom';
import Head from '../components/Head'
//import HttpCommon from './lib/HttpCommon';

//
let pageItems: any[] = [];
//
function Page(){
  return(
  <div>
    <Head />
    <hr />
    <h1 className="text-4xl font-bold">Test.tsx</h1>
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
*/