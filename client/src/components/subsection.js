import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sectionrad from "./sectionrad";
import Rightside from "./rightside";

class Subsection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section id ='content' >
                <section className='hbox stretch'>
                    <Sectionrad />
                    < Rightside />
                    <Link to="/" className="hide nav-off-screen-block" data-toggle="className:nav-off-screen,open" data-target="#nav,html"></Link>
                </section>
            </section>

        )
    }
}

export default Subsection;