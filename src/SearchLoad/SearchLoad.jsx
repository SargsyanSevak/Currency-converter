import React, { useState } from 'react'
import { useContext } from 'react';
import Popup from 'react-animated-popup'
import { useForm } from 'react-hook-form'
import { ContextValue } from '../Context/Context';
import './SearchLoad.css'

function SearchLoad () {
  const [visible, setVisible] = useState(false)
  const {register,handleSubmit,reset} = useForm({
    mode : "onChange",
  })

    const {setFilteredObj,data} = useContext(ContextValue)
    
  function handleValues (dataOfInputs){
    let truckType = dataOfInputs.trucktype;
    let pickUp = dataOfInputs.pickup;
    let delivery = dataOfInputs.delivery;
    let date = dataOfInputs.date;
    let weight = dataOfInputs.weight;

    setFilteredObj(data.filter((load)=>{
     return (
        load.trucktype.toLowerCase().includes(truckType) 
        && load.pickup.toLowerCase().includes(pickUp.toLowerCase())
        && load.delivery.toLowerCase().includes(delivery.toLowerCase())
        && load.date.toLowerCase().includes(date)
        && load.weight.includes(weight) 
     )
    }))
   }
  
  return (
    <div className='search-load' >
      <div className='search-btn' onClick={() => setVisible(!visible)}><i className="fa-solid fa-arrow-up-short-wide"></i></div>
      <Popup visible={visible} onClose={() => setVisible(false)}>

        <form onSubmit={handleSubmit(handleValues)}>
        <div className='search-form'>
         <div className='searchBox'>
            <input type="text" placeholder='Տ/Մ օր․տենտ' 
              {...register("trucktype")} />
          </div>

          <div className='searchBox'>
            <input type="data" placeholder='Բարձում օր․Երևան' 
            {...register("pickup")}
            />
          </div>

          <div className='searchBox'>
            <input type="text" placeholder='Բեռնաթափում օր․Մոսկվա'
            {...register("delivery")}
            />
          </div> 

          <div className='searchBox'>
            <input type="text" placeholder='Բարձման օր օր․11/20'
            {...register("date")}
            />
          </div>

          <div className='searchBox'>
            <input type="number" placeholder='քաշ օր․22'
            {...register("weight")}
            />
          </div>

          <div className='searchBtn'><button className='btn' >Փնտրել</button></div>
          <div className='searchBtn'><button className='btn' onClick={()=> {reset()

            setFilteredObj(data)
        }
        }>Չեղարկել</button></div>
        </div>
       </form>
      </Popup>
    </div>
  )
}



export default SearchLoad