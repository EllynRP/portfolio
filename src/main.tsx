import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'

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
        <div className='content-main'>
          <div className='tiluloMain'>
            <h1>Contate-me</h1>
          </div>
          <div>
            div do titulo e formulario
            <div>
              div TF parte1
            </div>
            <div>
              dv TF part 2 
            </div>
          </div>
        </div>

        <Footer/>
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
