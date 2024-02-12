import { Link } from 'react-router-dom';
import './Header.css'

/**
 * Composant représentant l'en-tête de l'application.
 * Il contient un lien vers la page d'accueil, ainsi que des liens vers les pages de création et de visualisation des employés.
 * @returns {JSX.Element} Composant React représentant l'en-tête.
 */
const Header = () => {
    return (
        <header>
            {/* Barre de navigation */}
            <nav className='header__menu'>
                {/* Logo de l'application avec un lien vers la page d'accueil */}
                <Link to="/home" className="link__logo">HR net</Link>
                {/* Liste des liens vers les différentes pages */}
                <ul>
                    <li><Link to="/Home">Create a employee</Link></li>
                    <li><Link to="/List">View current employee</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
