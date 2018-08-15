import React, { Component } from "react";
import Leftside from "./leftside";
import Subsection from "./subsection";



class Highersection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
                <section className='hbox stretch'>
                    < Leftside />
                    <Subsection />
                </section>
            

        )
    }
}

export default Highersection;