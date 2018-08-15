import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {


    render() {

        return (
            <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
                <div className="navbar-header aside bg-info nav-xs">
                    <Link to ='/' className="btn btn-link visible-xs" data-toggle="className:nav-off-screen,open" data-target="#nav,html">
                        <i className="icon-list"></i>
                    </Link>
                    <Link to ='/' className="navbar-brand text-lt">
                        <i className="icon-earphones"></i>
                        <img src="./assets/logo.png" alt="." className="hide" />
                        <span className="hidden-nav-xs m-l-sm">AuralCloud</span>
                    </Link>
                    <Link to ='/' className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
                        <i className="icon-settings"></i>
                    </Link>
                </div>
                <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control input-sm no-border rounded" placeholder="Search songs, albums..." />
                        </div>
                    </div>
                </form>
                <div className="navbar-right ">
                    <ul className="nav navbar-nav m-n hidden-xs nav-user user">
                        <li className="hidden-xs">
                            <Link to ='/' className="dropdown-toggle lt" data-toggle="dropdown">
                                <i className="icon-bell"></i>
                                <span className="badge badge-sm up bg-danger count" style={{display: 'inlineBlock'}}>3</span>
                            </Link>
                            <section className="dropdown-menu aside-xl animated fadeInUp">
                                <section className="panel bg-white">
                                    <div className="panel-heading b-light bg-light">
                                        <strong>You have
                                        <span className="count" style={{ display: 'inline' }}>3</span>
                                            notifications</strong>
                                    </div>
                                    <div className="list-group list-group-alt">
                                        <Link to ='/'className="media list-group-item" style={{display: 'block'}}>
                                            <span className="pull-left thumb-sm text-center">
                                                <i className="fa fa-envelope-o fa-2x text-success"></i>
                                            </span>
                                            <span className="media-body block m-b-none">Sophi sent you Link email
                                            <br />
                                                <small className="text-muted">1 minutes ago</small>
                                            </span>
                                        </Link>
                                        <Link to ='/'className="media list-group-item">
                                            <span className="pull-left thumb-sm">
                                                <img src="./assets/a0.png" alt="..." className="img-circle" /> </span>
                                            <span className="media-body block m-b-none"> Use awesome animate.css
                                            <br />
                                                <small className="text-muted">10 minutes ago</small>
                                            </span>
                                        </Link>
                                        <Link to ='/'className="media list-group-item">
                                            <span className="media-body block m-b-none"> 1.0 initial released
                                            <br />
                                                <small className="text-muted">1 hour ago</small>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="panel-footer text-sm">
                                        <Link to ='/'className="pull-right">
                                            <i className="fa fa-cog"></i>
                                        </Link>
                                        <Link to ='/' data-toggle="className:show animated fadeInRight">See all the notifications</Link>
                                    </div>
                                </section>
                            </section>
                        </li>
                        <li className="dropdown">
                            <Link to ='/'className="dropdown-toggle bg clear" data-toggle="dropdown">
                                <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                                    <img src="./assets/a0.png" alt="..." /> </span> John.Smith
                            <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu animated fadeInRight">
                                <li>
                                    <span className="arrow top"></span>
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
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;