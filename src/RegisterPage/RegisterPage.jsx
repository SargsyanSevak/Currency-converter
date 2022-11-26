import React, { useEffect, useState } from 'react'
import './RegisterPage.css'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';



const RegisterPage = () => {

const [users,setUsers] = useState([])
let navigate = useNavigate()
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {
         setUsers(data)
        })
      },[])

    const {register,handleSubmit,reset} = useForm({
        mode : "onChange",
      })

      const adduser = async(user)=>{
        if(user.length <= 0){
            return 
        }else{
              const response = await axios.post('http://localhost:3000/users',user);
        }
      
         setUsers([...users,user])
      }
    function onSubmit(data){
     adduser(data)
     reset()
     navigate('/')
    }

  return (
  <div className='Register'>
  <div className="container">
    <div className="title">Գրանցում</div>
    <div className="content">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="user-details">
          <div className="input-box">
            <input type="text" placeholder="Անուն/ազգանուն" required {...register("name")}/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Մուտքանուն" required {...register("username")}/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Էլ-հասցե" required {...register("email")}/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Հեռախոսահամար" required {...register("tell")}/>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Գաղտնաբառ" required {...register("password")}/>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Կրկնել գաղտնաբառը" required {...register("password")}/>
          </div>
        </div>
       
        <div className="button">
          <input type="submit" value="Գրանցվել" onSubmit={()=>{reset()}}/>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default RegisterPage