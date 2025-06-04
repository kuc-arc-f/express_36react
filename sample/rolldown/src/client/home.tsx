import React from 'react'
import ReactDOM from 'react-dom/client'
console.log("#home.tsx");
import Head from '../components/Head'

function Page(){
  return(
  <div >
    <Head />
    <hr />
    <h1 className="text-4xl font-bold">Home</h1>
  </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
   <Page />
)
