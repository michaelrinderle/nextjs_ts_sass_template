import Link from 'next/link'
import React from 'react';

class Nav extends React.PureComponent {

    constructor(props: any) {
        super(props);
        this.state = { responsive: "" }
        this.toggleMenu=this.toggleMenu.bind(this);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-12 header">
                    <Link href="/"><a className="logo"><img src="https://via.placeholder.com/100x25" /></a></Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                    <ul className="menu">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="about"><a>About</a></Link></li>
                        <li><Link href="about"><a>About</a></Link></li>
                        <li><ul>
                        <li><Link href="about"><a>About</a></Link></li>
                        </ul></li>
                    </ul>
                </div>
            </div>
        );
    }
    
    private toggleMenu() {

    }
}

export default Nav