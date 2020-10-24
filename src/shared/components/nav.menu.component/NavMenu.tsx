import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import '../nav.menu.component/NavMenu.css'

class NavMenu extends Component {
    render() {
        return (
            <div className="card-nav-menu">
                <nav>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Service</Link></li>
                        <li><Link>Reports</Link></li>
                        <li><Link>Extra</Link></li>
                        <li><Link>Log out</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavMenu;