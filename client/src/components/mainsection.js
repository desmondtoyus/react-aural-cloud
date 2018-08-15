import React, { Component } from "react";
import Highersection from "./highersection";
import Header from "./header";

class Mainsection extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <section className='vbox'>
                {/* HEADER */}
                {/* SUBSECTION */}
                <Header />
                <Highersection />
            </section>

        )
    }
}

export default Mainsection;