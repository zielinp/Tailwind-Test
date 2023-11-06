// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {Button, Navbar, Footer, Stats }  from './components'
import LoginForm from './components/LoginForm'
// import styles from './style'

// import React from 'react';




// const people = [
//   {
//     name: 'Calvin Hawkins',
//     email: 'calvin.hawkins@example.com',
//     image:
//       'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Kristen Ramos',
//     email: 'kristen.ramos@example.com',
//     image:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     name: 'Ted Fox',
//     email: 'ted.fox@example.com',
//     image:
//       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
// ]

export default function App() {
  // return (
  //   <ul className="divide-y divide-gray-200">
  //     {people.map((person) => (
  //       <li key={person.email} className="py-4 flex">
  //         <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
  //         <div className="ml-3">
  //           <p className="text-sm font-medium text-gray-900">{person.name}</p>
  //           <p className="text-sm text-gray-500">{person.email}</p>
  //         </div>
  //       </li>
  //     ))}
  //   </ul>
  // )

  return (
    // <div>
    //   <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
    //     Price
    //   </label>
    //   <div className="relative mt-2 rounded-md shadow-sm">
    //     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    //       <span className="text-gray-500 sm:text-sm">$</span>
    //     </div>
    //     <input
    //       type="text"
    //       name="price"
    //       id="price"
    //       className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //       placeholder="0.00"
    //     />
    //     <div className="absolute inset-y-0 right-0 flex items-center">
    //       <label htmlFor="currency" className="sr-only">
    //         Currency
    //       </label>
    //       <select
    //         id="currency"
    //         name="currency"
    //         className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
    //       >
    //         <option>USD</option>
    //         <option>CAD</option>
    //         <option>EUR</option>
    //       </select>
    //     </div>
    //   </div>
    // </div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* <Navbar />
      <Stats />
           
      <Button text="Text prop 1" />
      <Button text="Text prop 2" bg="black"/>

      <Footer /> */}
     
      
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
        </div>
      </div>
  )

}

// const App = () => {
//   return (
//     <div className="bg-blue-500 p-4">
//       <h1 className="text-2xl font-bold text-red">Witaj w mojej aplikacji z Tailwind CSS!</h1>
//       <p className="text-white">To jest przykładowy tekst.</p>
//     </div>
//   );

// };
// export default App;



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>




//     </>
//   )
// }

// export default App;
