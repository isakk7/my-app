import { Close,  MenuOutlined, Twitter, LinkedIn} from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {

    const [active,setActive] = useState(false);


    const showMenu = () => {
            setActive(!active)
    }

    return (
        <div className='header'>

                 

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                        <Close className='close' onClick={showMenu}/>
                    </div>
                    <div>
                        <li>
                        <Link to='/'>Home</Link>
                        </li>
                    </div>
                    <li>
                        <Link to='/'>Ingles</Link>
                    </li>
                    <li>
                        <Link to='/'>Español</Link>
                    </li>
                    
                </ul>
                
            </nav>
            <div className="icons">
                                <LinkedIn className='icon'/>
                                <Twitter className='icon'/>

                            </div>
                    {/* <div className="changer">
                        <MenuOutlined className='menu' onClick={showMenu}/>
                    </div> */}
                    </div>
    )
}

export default Header
