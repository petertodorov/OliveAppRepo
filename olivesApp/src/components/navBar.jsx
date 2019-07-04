import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class navBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="https://oliveoillovers.com/greek-olive-oil" className='navbar-brand' target='_blank' rel="noopener noreferrer">
                    <img src='/images/olive-tree-logo.png' alt="oliveLogo" width='60' height='60' />
                </a>
                <Link to='/' className='navbar-brand'> Olive<span className='text-warning'>s</span>  and oil</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>My Olive Jars</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='create' className='nav-link'>Create olive jar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}