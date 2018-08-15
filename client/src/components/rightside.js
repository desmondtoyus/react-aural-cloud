import React, { Component } from "react";
import { Link } from "react-router-dom";


class Rightside extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <aside className="aside-md bg-light dk" id="sidebar" style={{height:'1000px'}}>
                <section className="vbox animated fadeInRight">
                    <section className="w-f-md scrollable hover">
                        <h4 className="font-thin m-l-md m-t">Connected</h4>
                        <ul className="list-group no-bg no-borders auto m-t-n-xxs">
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a1.png" alt="..." className="img-circle" />
                                    <i className="on b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Chris Fox</Link>
                                    </div>
                                    <small className="text-muted">New York</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a2.png" alt="..." />
                                    <i className="on b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Amanda Conlan
                                                    </Link>
                                    </div>
                                    <small className="text-muted">France</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a3.png" alt="..." />
                                    <i className="busy b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Dan Doorack</Link>
                                    </div>
                                    <small className="text-muted">Hamburg</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a4.png" alt="..." />
                                    <i className="away b-light right sm" ></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Lauren Taylor
                                                    </Link>
                                    </div>
                                    <small className="text-muted">London</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a5.png" alt="..." className="img-circle" />
                                    <i className="on b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Chris Fox</Link>
                                    </div>
                                    <small className="text-muted">Milan</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a6.png" alt="..." />
                                    <i className="on b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Amanda Conlan
                                                    </Link>
                                    </div>
                                    <small className="text-muted">Copenhagen</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a7.png" alt="..." />
                                    <i className="busy b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Dan Doorack</Link>
                                    </div>
                                    <small className="text-muted">Barcelona</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a8.png" alt="..." />
                                    <i className="away b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Lauren Taylor
                                                    </Link>
                                    </div>
                                    <small className="text-muted">Tokyo</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a9.png" alt="..." className="img-circle" />
                                    <i className="on b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Chris Fox</Link>
                                    </div>
                                    <small className="text-muted">UK</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a1.png" alt="..." />
                                    <i className="on b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Amanda Conlan
                                                    </Link>
                                    </div>
                                    <small className="text-muted">Africa</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a2.png" alt="..." />
                                    <i className="busy b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Dan Doorack</Link>
                                    </div>
                                    <small className="text-muted">Paris</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                                    <img src="./assets/a3.png" alt="..." />
                                    <i className="away b-light right sm"></i>
                                </span>
                                <div className="clear">
                                    <div>
                                        <Link to ='/'>Lauren Taylor
                                                    </Link>
                                    </div>
                                    <small className="text-muted">Brussels</small>
                                </div>
                            </li>
                        </ul>
                    </section>
                    
                </section>
            </aside>

        )
    }
}

export default Rightside;