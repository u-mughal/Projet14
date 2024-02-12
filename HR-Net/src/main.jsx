import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import PublicRouter from '@/Pages/PublicRouter';
import './index.css'
import { Provider } from 'react-redux';
import { mainStore } from './Redux';

/**
 * Fonction principale pour rendre l'application React.
 * Elle utilise ReactDOM.createRoot pour le rendu dans la racine du document.
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  // Mode strict de React pour des vérifications supplémentaires
  <React.StrictMode>
    {/* Fournit le magasin Redux à toute l'application */}
    <Provider store={mainStore}>
      {/* Utilisation du routeur de navigation basé sur le navigateur */}
      <BrowserRouter>
        {/* Définition des routes de l'application */}
        <Routes>
          {/* Route pour la navigation publique */}
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
