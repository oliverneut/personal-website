const navbar = () => {
    return <header>
        <a className="title" href="/"> <div className="surname" >Oliver</div> <div className="name">Neut</div> </a>
        <nav>
            <ul className="nav_links">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
}

export default navbar