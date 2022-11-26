import React, { useState } from 'react'
import Popup from 'react-animated-popup'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import './AddLoads.css'


const AddLoads = ({loads,setLoads}) => {
    
    const [visible, setVisible] = useState(false)

    const {register,handleSubmit,reset} = useForm({
        mode : "onChange",
      })

    const postLoad = async(load)=>{
        if(load.date.trim()){
           const response = await axios.post('http://localhost:3000/loads',load);
        if(response.request.status === 201){
          setLoads([...loads,load])
        }
        }
      }
    function onSubmit(data){
        postLoad(data);
    }
  return (
    <div className='container-Style'>
      <div className='btn register-btn' onClick={() => setVisible(!visible)}>Ավելացնել </div>
      <Popup visible={visible} onClose={() => setVisible(false)} className='pop'>
        <form className='register' onSubmit={handleSubmit(onSubmit)} >
            <input type="date"  placeholder='Բարձման օր' {...register("date")}/>
            <input type="text" placeholder='Տ/Մ տեսակ' {...register("trucktype")}/>
            <input type="text" placeholder='Բարձում' {...register("pickup")}/>
            <input type="text" placeholder='Բեռնաթափում' {...register("delivery")}/>
            <input type="text" placeholder='Ընկերություն' {...register("company")}/>
            <input type="text" placeholder='Քաշ' {...register("weight")}/>
            <input type="number" placeholder='Հեռախոսահամար' {...register("tel")}/>
            <input type="email" placeholder='Էլ հասցե' {...register("email")}/>
            <input type="text" placeholder='Գին' {...register("price")}/>
            <button className='btn' onClick={()=>setVisible(false)}> Ավելացնել</button>
        </form>
      </Popup>
    </div>
  )
}

export default AddLoads