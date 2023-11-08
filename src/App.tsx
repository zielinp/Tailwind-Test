
import './App.css'
// import {Button, Navbar, Footer, Stats }  from './components'
import {LoginForm} from './components'



// import { BrowserRouter, Route, Routes } from 'react-router-dom'




export default function App() {
  

  return (
    // <BrowserRouter>
    //  <Routes>

    //   <Route/ >
    // </Routes>
    // </BrowserRouter>
   

    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
     
     
      
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
        </div>
      </div>
  )

}

