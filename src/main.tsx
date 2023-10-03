import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import Contato from './componentes/contato/Contato'

import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>,
  },
  {
    path: "/status",
    element: 
    <>
      <Header/>
      <div className='content-main'>Página Status!</div>
      <Footer/>
    </>,
  },
  {
    path: "/curriculo",
    element:
    <>
      <Header/>
      <div className='content-main'>Página do curriculo!</div>
      <Footer/>
    </>,
  },
  {
    path: "/contato",
    element: 
      <>
        <Header/>
        <Contato/>
        <Footer/>
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
