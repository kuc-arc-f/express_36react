import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
console.log("#about.tsx");
import Head from '../components/Head'

function Page(){
  return(
  <div class="h-dvh bg-gray-100 p-4">
    <Head />
    <hr />
    <h1 className="text-4xl font-bold">About</h1>
  </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
*/