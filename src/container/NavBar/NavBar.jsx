import React, { Component } from "react";
import {SiPostman}  from 'react-icons/si';
class NavBar extends Component {

    render() {

        return (<div > 
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"#f58142"}}>
                <a className="navbar-brand mx-2 text-danger" href="#"><SiPostman className="left-icon"/><span className="mx-2 mt-3">PostMan</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home</a>
                    
                    </div>
                </div>
            </nav>
        </div>)

    }

}
export default NavBar;