import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './nav.css'
const Nav = () => {

    const logo = 'do.'
    const home = 'home'
    const completed = 'completed'
    const pending = 'pending'
    const trash = 'trashed'

    return (

        <nav className='nav'>
            <div className="navPadding">
                <div className="navContainer">
                    <div className="logo">
                        <Link to="#">
                            {logo}
                        </Link>
                    </div>
                    <div className="navLinks">
                        <ul>
                            <li>
                                <span>
                                    <i className="fas fa-home"></i>
                                </span>
                                <Link to='/'>{home}</Link>
                            </li>
                            <li>
                                <span>
                                    <i className="fas fa-circle-check"></i>
                                </span>
                                <Link to={`/${completed}`}>{`${completed} tasks`}</Link></li>
                            <li>
                                <span>
                                    <i className="fas fa-clock"></i>
                                </span>
                                <Link to={`/${pending}`}>{`${pending} tasks`}</Link>
                            </li>
                            <li>
                                <span>
                                    <i className="fas fa-trash"></i>
                                </span>
                                <Link to={`/${trash}`}>{`${trash} tasks`}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav;