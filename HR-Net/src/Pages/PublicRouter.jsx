import { Routes, Route } from 'react-router-dom'
import { Home, List, Error } from '@/Pages/index'
import Layout from '@/Layout/Layout';

/**
 * Composant représentant le routeur public de l'application.
 * Ce routeur gère les routes accessibles à tous les utilisateurs, y compris les pages d'accueil, de liste et d'erreur.
 * Il inclut également le Layout pour fournir une structure commune aux pages.
 * @returns {JSX.Element} Composant React représentant le routeur public.
 */
const PublicRouter = () => {
    
    return (
        <Routes>
            {/* Route principale utilisant le Layout */}
            <Route element={<Layout />}>
                {/* Route de la page d'accueil */}
                <Route index element={<Home />} />
                {/* Route de la page d'accueil */}
                <Route path="/home" element={<Home />} />
                {/* Route de la page de liste des employés */}
                <Route path="/list" element={<List />} />
                {/* Route pour toutes les autres URL non définies */}
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
