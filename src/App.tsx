
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login/Login'
import Services from './pages/Services/Services'
import Question from './components/Question/Question'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import StudentApi from './pages/StudentsApi/StudentApi'
import Signup from './pages/SignUp/Signup'




function App() {

  return (
    <>
      <div>
        <Routes>

          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>
          <Route path='/studentApi/:id' element={<StudentApi/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>


        
      </div>   
    </>
  )
}

export default App
