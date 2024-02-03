import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='header__menu'>
                <Link to="/home" className="link__logo">HR net</Link>
                <ul>
                    <li><Link to="/Home">Create a employee</Link></li>
                    <li><Link to="/List">View current employee</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;