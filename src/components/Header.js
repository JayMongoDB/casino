import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import HomeIcon from '../app/assets/img/HomeIcon.jpg';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <Navbar dark color='primary' sticky='top' expand='md'>

            <NavbarBrand className='ms-5' href='/'>

                <img className='float-start' src={HomeIcon} alt='Casino Logo' />
                <h1 className='mt-1' >Las Vegas Casino Corp</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>

                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' />Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink className='nav-link' to='directory'>
                        <i className="fa fa-list fa-lg" />Directory
                    </NavLink>
                    </NavItem>


                </Nav>
                <UserLoginForm/>
            </Collapse>



        </Navbar>

    );

}

export default Header;