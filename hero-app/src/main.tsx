import React from 'react'
import ReactDOM from 'react-dom/client'
//paginacion npm i react-router-dom@6
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { HerosApp } from './HerosApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HerosApp />
    </BrowserRouter>
  </React.StrictMode>,
)
