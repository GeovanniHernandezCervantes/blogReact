import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="nav-link" to="/home">
                    Acerca de
                </Link>
                <Link className="nav-link" to="/listado">
                    Listado
                </Link>
                <Link className="nav-link" to="/agregar">
                    Agregar
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
