import {Routes,Route} from 'react-router-dom'
import LoadBoard from './LoadBoard/LoadBoard';
import Layout from './Layout/Layout'
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import IsLogin from './IsLogin/IsLogin';

function App() {
return  (
     <>
  <Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<LoginPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='loadboard' element={
          <IsLogin>
                <LoadBoard/>
          </IsLogin>
        }/>
    </Route>
  </Routes>
</>
  )
}

export default App;

