import React, { Component } from "react";

class Rightsidefooter extends Component{

    render(){

        return(
            <footer className="footer-md bg-black" style={{width:'295px', marginLeft:'auto', marginRight:'0', overflow:"none"}}>
                <form className="" role="search">
                    <div className="form-group clearfix m-b-none">
                        <div className="input-group m-t m-b">
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-sm bg-empty text-muted btn-icon">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            <input type="text" className="form-control input-sm text-white bg-empty b-b b-dark no-border"
                                placeholder="Search members" />
                        </div>
                    </div>
                </form>
            </footer>
        )
    }
}

export default Rightsidefooter;
