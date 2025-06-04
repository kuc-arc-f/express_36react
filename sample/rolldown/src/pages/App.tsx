import * as React from 'react';

//console.log("env=", process.env.NODE_ENV)

export default function Page() { 
  return (
  <html>
  <head>
      <title>welcome</title>
      {(process.env.NODE_ENV !== "production") ? (
          <link href="/static/main.css" rel="stylesheet" /> 
      ): (
          <link href="/public/static/main.css" rel="stylesheet" /> 
      )} 
  </head>
  <body>
    <div id="root"></div>
    {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/home.js"></script>
    ): (
        <script type="module" src="/public/static/home.js"></script>
    )}        
  </body>
  </html>
  );
}
/*
  <html>
      <head>
          <title>welcome</title>
          {(process.env.NODE_ENV === "develop") ? (
              <link href="/static/main.css" rel="stylesheet" /> 
          ): (
              <link href="/public/static/main.css" rel="stylesheet" /> 
          )} 
      </head>
      <a href="/">[ home ]</a>
      <a href="/about">[ about ]</a>
      <hr />        
      <div id="root"></div>
      <h1 className="text-4xl font-bold">Hello</h1>
  </html>

*/
