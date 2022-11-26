import React, { useState } from 'react'
export const ContextValue = React.createContext()

const Context = (props) => {

const [data,setData] = useState([])
const [user,setUser] = useState({})
const [filteredObj,setFilteredObj] = useState([])

console.log(user)
  return (
   <ContextValue.Provider value={{
    data,
    setData,
    filteredObj,
    setFilteredObj,
    user,
    setUser
   }}>
    {
    props.children
    }
   </ContextValue.Provider>
   
  )
}

export default Context