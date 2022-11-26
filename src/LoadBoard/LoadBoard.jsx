import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import LoadList from '../LoadList/LoadList';
import { ContextValue } from '../Context/Context';
import SearchLoad from '../SearchLoad/SearchLoad';
import "../index.css"

function LoadBoard() {
  
    const [loads,setLoads] = useState([])
    const [searchLoad,setSearchLoad] = useState([])
    const {setData} = useContext(ContextValue)
    
    
      useEffect(()=>{
        fetch("http://localhost:3000/loads")
        .then(response => response.json())
        .then(data => {
          setLoads(data)
          setSearchLoad(data)
          setData(data)
        })
      },[])
    
    
      return (
        <div className="App">
          <SearchLoad />
          <Header loads={loads} setLoads={setLoads}/>
          <LoadList loads={loads}/>
        </div>
      );
    }
    
    export default LoadBoard;