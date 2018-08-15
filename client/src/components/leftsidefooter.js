import React, { Component } from "react";
import { Link } from "react-router-dom";

class Leftsidefooter extends Component{
    render(){
        return(
            <footer className="footer hidden-xs no-padder text-center-nav-xs" style={{ position: 'fixed' }}>
                <div className="bg hidden-xs ">
                    <div className="dropdown dropup wrapper-sm clearfix">
                        <Link to ='/' className="dropdown-toggle" data-toggle="dropdown">
                            <span className="thumb-sm avatar pull-left m-l-xs">
                                <img src="./assets/a3.png" className="dker" alt="..." />
                                <i className="on b-black"></i>
                            </span>
                            <span className="hidden-nav-xs clear">
                                <span className="block m-l">
                                    <strong className="font-bold text-lt">John.Smith</strong>
                                    <b className="caret"></b>
                                </span>
                                <span className="text-muted text-xs block m-l">Art Director</span>
                            </span>
                        </Link>
                        <ul className="dropdown-menu animated fadeInRight aside text-left">
                            <li>
                                <span className="arrow bottom hidden-nav-xs"></span>
                                <Link to ='/'>Settings</Link>
                            </li>
                            <li>
                                <Link to ='/'>Profile</Link>
                            </li>
                            <li>
                                <Link to ='/'>
                                    <span className="badge bg-danger pull-right">3</span> Notifications </Link>
                            </li>
                            <li>
                                <Link to ='/'>Help</Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link to ='/' data-toggle="ajaxModal">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Leftsidefooter;