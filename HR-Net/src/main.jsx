import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import PublicRouter from '@/Pages/PublicRouter';
import './index.css'
import { Provider } from 'react-redux';
import { mainStore } from './redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
