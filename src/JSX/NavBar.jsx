import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Container} from 'react-bootstrap';
import '../Styles/NavBar-style.scss';
import '../Styles/reset.css';




const NavBar  = () => {
    return(
    <>
    {/*
    
    <NavBar>

        <Container>

            <Nav.Brand>
                <Link to={'/'} className='link'>Я</Link>
            </Nav.Brand>

                <Nav>   

                    <Nav.Link>
                        <Link to={'/about'} className='link'>Обо мне</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to={'/projects'} className='link'>ПРоекты</Link>
                    </Nav.Link>

                </Nav>

                </Container>

                </NavBar>
    */}


    <nav className='nav'>

    <div className='nav-div'>

        <NavLink to="/" className="link">
            Приветствие
        </NavLink>

        <NavLink to="/about" className="link">
            Обо мне
        </NavLink>

        <NavLink to="/projects" className="link">
            Проекты
        </NavLink>

        </div>

    </nav>
    </>
    
    )
    }

    export default NavBar;