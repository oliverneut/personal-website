import { Link } from 'react-router-dom';

const navbar = () => {
    return <header>
        <a className="title" href="/"> <div className="surname" >Oliver</div> <div className="name">Neut</div> </a>
        <nav>
            <ul className="nav_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default navbar