import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import PublicRouter from '@/Pages/PublicRouter';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
