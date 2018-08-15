import React, { Component } from 'react';
import Leftsidefooter from "./leftsidefooter";
import { Link } from "react-router-dom";


class Leftside extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <aside className="bg-black dk nav-xs aside hidden-print" id="nav">
                <section className="vbox">
                    <section className="w-f-md scrollable">
                        <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '616px'}}>
                            <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railopacity="0.2"
                                style={{overflow: 'hidden', width: 'auto', height: '616px'}}>
                                <nav className="nav-primary hidden-xs">
                                    <ul className="nav bg clearfix">
                                        <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted"> Discover</li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-disc icon text-success"></i>
                                                <span className="font-bold">What's new</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-music-tone-alt icon text-info"></i>
                                                <span className="font-bold">Genres</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-drawer icon text-primary-lter"></i>
                                                <b className="badge bg-primary pull-right">6</b>
                                                <span className="font-bold">Events</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to ='/'>
                                                <i className="icon-list icon text-info-dker"></i>
                                                <span className="font-bold">Listen</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" data-target="#content"
                                                data-el="#bjax-el" data-replace="true">
                                                <i className="icon-social-youtube icon text-primary"></i>
                                                <span className="font-bold">Video</span>
                                            </Link>
                                        </li>
                                        <li className="m-b hidden-nav-xs"></li>
                                    </ul>
                                    <ul className="nav" data-ride="collapse">
                                        <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted"> Interface</li>
                                        <li>
                                            <Link to="/" className="auto">
                                                <span className="pull-right text-muted">
                                                    <i className="fa fa-angle-left text"></i>
                                                    <i className="fa fa-angle-down text-active"></i>
                                                </span>
                                                <i className="icon-screen-desktop icon"> </i>
                                                <span>Layouts</span>
                                            </Link>
                                            <ul className="nav dk text-sm">
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Color option</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/"className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Boxed layout</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Fluid layout</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/" className="auto">
                                                <span className="pull-right text-muted">
                                                    <i className="fa fa-angle-left text"></i>
                                                    <i className="fa fa-angle-down text-active"></i>
                                                </span>
                                                <i className="icon-chemistry icon"> </i>
                                                <span>UI Kit</span>
                                            </Link>
                                            <ul className="nav dk text-sm">
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Buttons</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <b className="badge bg-info pull-right">369</b>
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Icons</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/"className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Grid</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <b className="badge bg-dark pull-right">8</b>
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Widgets</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Components</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>List group</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/"className="auto">
                                                        <span className="pull-right text-muted">
                                                            <i className="fa fa-angle-left text"></i>
                                                            <i className="fa fa-angle-down text-active"></i>
                                                        </span>
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Table</span>
                                                    </Link>
                                                    <ul className="nav dker">
                                                        <li>
                                                            <Link to="/">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Table static</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Datatable</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <span className="pull-right text-muted">
                                                            <i className="fa fa-angle-left text"></i>
                                                            <i className="fa fa-angle-down text-active"></i>
                                                        </span>
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Form</span>
                                                    </Link>
                                                    <ul className="nav dker">
                                                        <li>
                                                            <Link to="/">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Form elements</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Form validation</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Form wizard</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Chart</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Portlet</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Timeline</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/" className="auto">
                                                <span className="pull-right text-muted">
                                                    <i className="fa fa-angle-left text"></i>
                                                    <i className="fa fa-angle-down text-active"></i>
                                                </span>
                                                <i className="icon-grid icon"> </i>
                                                <span>Pages</span>
                                            </Link>
                                            <ul className="nav dk text-sm">
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Profile</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Blog</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Invoice</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/"className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Google Map</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Vector Map</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Signin</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>Signup</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/"className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>
                                                        <span>404</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav text-sm">
                                        <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                                            <span className="pull-right">
                                                <Link to="/">
                                                    <i className="icon-plus i-lg"></i>
                                                </Link>
                                            </span> Playlist
                                            </li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-music-tone icon"></i>
                                                <span>Hip-Pop</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-playlist icon text-success-lter"></i>
                                                <b className="badge bg-success dker pull-right">9</b>
                                                <span>Jazz</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                </div>


                            <div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)', width: '10px', position: 'absolute', top: '-44px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: '99', right: '0px', height: '616px'}}></div>
                            <div className="slimScrollRail" style={{width: '10px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '0px'}}></div>
                        </div>
                    </section>
                    <Leftsidefooter />
                </section>
            </aside>)
    }
}

export default Leftside;
