import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/**
 * Composant représentant la mise en page générale de l'application.
 * Il inclut l'en-tête, le contenu principal et le pied de page.
 * @returns {JSX.Element} Composant React représentant la mise en page.
 */
const Layout = () => {
    return (
        <div className="layout">
            {/* En-tête de l'application */}
            <Header />
            <main>
                {/* Outlet permet d'afficher le contenu de la route actuelle */}
                <Outlet />
            </main>
            {/* Pied de page de l'application */}
            <Footer />
        </div>
    )
}

export default Layout;
