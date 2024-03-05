import {useState, useEffect}  from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
//mport { Link } from 'react-router-dom';
import Head from '../components/Head'
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './test/CrudIndex';
//
let pageItems: any[] = [];
//
function Page(){
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  useEffect(() => {
    (async () => {
        getList();
    })()
  }, []);
  //
  const testProc = async function(){
    console.log("testProc" + new Date().toString() );
  }
  /**
   *
   * @param
   *
   * @return
   */
  const addProc = async function(){
    await CrudIndex.addItem(); 
    location.reload();
//    console.log("addProc");
  }
  /**
   *
   * @param
   *
   * @return
   */
  const getList = async function() {
    try{
console.log("#Test4.getList");
      const item  = {
        "userId": 0,
      }      
      const json = await CrudIndex.getList()
console.log(json);
      pageItems = json;
      setUpdatetime(new Date().toString());
    } catch (e) {
        console.error(e);
    } 
  }
  //
  return(
  <div  className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <hr />
    <h1 className="text-4xl font-bold my-2">Test.tsx</h1>
    <hr className="my-2" />
    <label>Title:</label>
    <input type="text" id="title" 
    className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
    />    
    <hr className="my-2" />
    <button className="btn-purple" onClick={()=>addProc()}>Save
    </button>    
    <hr className="my-1" />
    {pageItems.map((item: any ,index: number) => {
    return (
    <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <a href={`/test/show?id=${item.id}`}>
          <button className="btn-outline-purple ms-2">Show</button>
        </a>
        <hr />
    </div>
    )
    })}    

  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
<hr className="my-2" />
<button className="btn-purple" onClick={()=>testProc()}>Test</button>
*/
