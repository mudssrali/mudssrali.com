import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnimalAvatar from '../assets/cool-cat.png'

import '../styles/main.css'

interface P {
	menuLinks: MenuLink[]
}

interface S {
	scrolled: boolean
}

class Navigation extends Component<P, S> {

    constructor(props: P) {
        super(props)
        this.state = {
           scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll)
    }
    
    navOnScroll = () => {
        if (window.scrollY > 20) {
          this.setState({ scrolled: true })
        } else {
          this.setState({ scrolled: false })
        }
    }

    render() {
        
        const { menuLinks } = this.props

        return (<div className="hero-head">
                <div className="container">
                    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link id="unicorn-btn" className="navbar-item" to="/">
                            <img src={AnimalAvatar} alt="cat"/>
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">   
                        {
                            menuLinks.map(link => (
                                <Link className="navbar-item is-tab" key={link.name} to={link.link}>{link.name}</Link>
                            ))
                        }
                        </div>
                    </div>
                    </nav>
                </div>
            </div>);
    }
}

export default Navigation
