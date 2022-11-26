import React, { useContext } from 'react'
import "./LoginPage.css"
import {Link, useNavigate} from 'react-router-dom'
import RegisterPage from '../RegisterPage/RegisterPage'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react'
import { ContextValue } from '../Context/Context'

const LoginPage = () => {

    const {setUser} = useContext(ContextValue)
    const [notFound,setNotFound] = useState(false)
    const {register,handleSubmit,reset} = useForm({
        mode : "onChange",
      })

      let navigate = useNavigate()
      
      function logIn(data){
        axios.get('http://localhost:3000/users')
        .then(res =>{
            return res.data
        })
        .then(user => {
           return user.filter(el =>{
            return el.username.toLowerCase() === data.username.toLowerCase() && el.password === data.password
           })
        }).then(data => {
          if(data.length){
            setNotFound(false)
            navigate('loadboard')
            setUser(data[0])
          }else {
            setNotFound(true)
          }
        })
        reset()
       }
      


  return (
    <>
      <div className='LogIn'>
        <div className='LogIn-form'>
          <form onSubmit={handleSubmit(logIn)}>ՄՈՒՏՔ
            <input type="text" placeholder='Մուտքանուն' required {...register("username")} className={notFound ? 'error-border' : ''}/>
            <input type="password" placeholder='Գաղտնաբառ' required {...register("password")} className={notFound ? 'error-border' : ''}/>
              {
              notFound &&
              <span className='isCorrect'>Սխալ մուտքանուն կամ գաղտնաբառ</span>}
            <button>Մուտք</button>
            <span>Դեռ չունե՞ք հաշիվ</span>
           <Link to='/register' element={<RegisterPage/>}><button>Գրանցվել</button></Link> 
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage