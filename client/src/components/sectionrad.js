import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { connect } from 'react-redux';
import { listUsers } from "../redux/actions/test.action";
import { withRouter } from 'react-router';

class Sectionrad extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    handleRefresh = (e) =>{
        e.preventDefault();
        console.log('start');
       this.props.listUsers();
       
    }

    render() {
        const {users} = this.props
        return (
            <section className="vbox" style={{overflowY:'scroll'}}>
                <section className="vbox" style={{position:'absolute', paddingBottom:'70px'}}>
                    <section className="scrollable padder-lg w-f-md" id="bjax-target" >
                        <Link to ="/" className="pull-right text-muted m-t-lg"
                            data-toggle="className:fa-spin">
                            <i className="icon-refresh i-lg inline" id="refresh" 
                            ></i>
                        </Link>
                        <button onClick={this.handleRefresh}>here</button>
                        <h2 className="font-thin m-b">Discovery
                                        <span className="musicbar animate inline m-l-sm" style={{width:'20px', height:'20px'}}>
                                <span className="bar1 a1 bg-primary lter"></span>
                                <span className="bar2 a2 bg-info lt"></span>
                                <span className="bar3 a3 bg-success"></span>
                                <span className="bar4 a4 bg-warning dk"></span>
                                <span className="bar5 a5 bg-danger dker"></span>
                            </span>
                        </h2>
                        <div className="row row-sm">
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="bottom">
                                            <span className="badge bg-info m-l-sm m-b-sm">03:20</span>
                                        </div>
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p1.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Tempered Song</Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">Miaow</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black active">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/" data-toggle="className">
                                                    <i className="icon-control-play i-2x text"></i>
                                                    <i className="icon-control-pause i-2x text-active"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right active"
                                                    data-toggle="className">
                                                    <i className="fa fa-heart-o text"></i>
                                                    <i className="fa fa-heart text-active text-danger"></i>
                                                </Link>
                                                <Link to ="/" data-toggle="className">
                                                    <i className="fa fa-plus-circle text"></i>
                                                    <i className="fa fa-check-circle text-active text-info"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p2.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Vivamus vel tincidunt libero
                                                    </Link>
                                        <Link to ="/" className="text-ellipsis text-xs text-muted">Lauren Taylor</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p3.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Morbi id neque quam liquam sollicitudin
                                                    </Link>
                                        <Link to ="/" className="text-ellipsis text-xs text-muted">Allen JH
                                                    </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="top">
                                            <span className="pull-right m-t-n-xs m-r-sm text-white">
                                                <i className="fa fa-bookmark i-lg"></i>
                                            </span>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p4.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Tincidunt libero</Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">Amanda Conlan</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p5.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Fermentum diam</Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">Nisa Colen</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="top">
                                            <span className="pull-right m-t-sm m-r-sm badge bg-info">6</span>
                                        </div>
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p6.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Habitant</Link>
                                        <Link to ="/" className="text-ellipsis text-xs text-muted">Dan Doorack</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="top">
                                            <span className="pull-right m-t-sm m-r-sm badge bg-white">12</span>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p7.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Vivamus vel tincidunt libero
                                                    </Link>
                                        <Link to ="/" className="text-ellipsis text-xs text-muted">Ligula H</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p8.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Aliquam sollicitudin venenati
                                                    </Link>
                                        <Link to ="/" className="text-ellipsis text-xs text-muted">James East</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p9.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Lementum ligula vitae</Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">Lauren Taylor</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay r r-2x bg-light dker active">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/" data-toggle="className"
                                                    className="active">
                                                    <i className="icon-control-play i-2x text"></i>
                                                    <i className="icon-control-pause i-2x text-active"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right"
                                                    data-toggle="className">
                                                    <i className="fa fa-heart-o text"></i>
                                                    <i className="fa fa-heart text-active text-danger"></i>
                                                </Link>
                                                <Link to ="/" className="active"
                                                    data-toggle="className">
                                                    <i className="fa fa-plus-circle text"></i>
                                                    <i className="fa fa-check-circle text-active text-info"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p10.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Egestas dui nec fermentum </Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">Chris Fox</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p11.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Aliquam sollicitudin venenatis ipsum</Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">Jack Jason</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="item">
                                    <div className="pos-rlt">
                                        <div className="item-overlay opacity r r-2x bg-black">
                                            <div className="text-info padder m-t-sm text-sm">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o text-muted"></i>
                                            </div>
                                            <div className="center text-center m-t-n">
                                                <Link to ="/">
                                                    <i className="icon-control-play i-2x"></i>
                                                </Link>
                                            </div>
                                            <div className="bottom padder m-b-sm">
                                                <Link to ="/" className="pull-right">
                                                    <i className="fa fa-heart-o"></i>
                                                </Link>
                                                <Link to ="/">
                                                    <i className="fa fa-plus-circle"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to ="/">
                                            <img src="./assets/p12.jpg" alt="" className="r r-2x img-full" />
                                        </Link>
                                    </div>
                                    <div className="padder-v">
                                        <Link to ="/" className="text-ellipsis">Vestibulum ullamcorper</Link>
                                        <Link to ="/"
                                            className="text-ellipsis text-xs text-muted">MM &amp; DD</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <h3 className="font-thin">New Songs</h3>
                                <div className="row row-sm">
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a2.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Spring rain</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Miaow</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a3.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Hope</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Miya</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a8.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Listen wind</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Soyia Jess</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a9.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Breaking me</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Pett JA</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a1.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Nothing</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Willion</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a6.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Panda Style</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Lionie</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a7.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Hook Me</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Gossi</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-3">
                                        <div className="item">
                                            <div className="pos-rlt">
                                                <div className="item-overlay opacity r r-2x bg-black">
                                                    <div className="center text-center m-t-n">
                                                        <Link to ="/">
                                                            <i className="fa fa-play-circle i-2x"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Link to ="/">
                                                    <img src="./assets/a5.png" alt="" className="r r-2x img-full" />
                                                </Link>
                                            </div>
                                            <div className="padder-v">
                                                <Link to ="/" className="text-ellipsis">Tempered Song</Link>
                                                <Link to ="/"
                                                    className="text-ellipsis text-xs text-muted">Miaow</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h3 className="font-thin">Top Songs</h3>
                                <div className="list-group bg-white list-group-lg no-bg auto">
                                    <Link to ="/" className="list-group-item clearfix">
                                        <span className="pull-right h2 text-muted m-l">1</span>
                                        <span className="pull-left thumb-sm avatar m-r">
                                            <img src="./assets/a4.png" alt="..." /> </span>
                                        <span className="clear">
                                            <span>Little Town</span>
                                            <small className="text-muted clear text-ellipsis">by Chris Fox</small>
                                        </span>
                                    </Link>
                                    <Link to ="/" className="list-group-item clearfix">
                                        <span className="pull-right h2 text-muted m-l">2</span>
                                        <span className="pull-left thumb-sm avatar m-r">
                                            <img src="./assets/a5.png" alt="..." /> </span>
                                        <span className="clear">
                                            <span>Lementum ligula vitae</span>
                                            <small className="text-muted clear text-ellipsis">by Amanda Conlan</small>
                                        </span>
                                    </Link>
                                    <Link to ="/" className="list-group-item clearfix">
                                        <span className="pull-right h2 text-muted m-l">3</span>
                                        <span className="pull-left thumb-sm avatar m-r">
                                            <img src="./assets/a6.png" alt="..." /> </span>
                                        <span className="clear">
                                            <span>Aliquam sollicitudin venenatis</span>
                                            <small className="text-muted clear text-ellipsis">by Dan Doorack</small>
                                        </span>
                                    </Link>
                                    <Link to ="/" className="list-group-item clearfix">
                                        <span className="pull-right h2 text-muted m-l">4</span>
                                        <span className="pull-left thumb-sm avatar m-r">
                                            <img src="./assets/a7.png" alt="..." /> </span>
                                        <span className="clear">
                                            <span>Aliquam sollicitudin venenatis ipsum</span>
                                            <small className="text-muted clear text-ellipsis">by Lauren Taylor</small>
                                        </span>
                                    </Link>
                                    <Link to ="/" className="list-group-item clearfix">
                                        <span className="pull-right h2 text-muted m-l">5</span>
                                        <span className="pull-left thumb-sm avatar m-r">
                                            <img src="./assets/a8.png" alt="..." /> </span>
                                        <span className="clear">
                                            <span>Vestibulum ullamcorper</span>
                                            <small className="text-muted clear text-ellipsis">by Dan Doorack</small>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-lg m-b-lg">
                            <div className="col-sm-6">
                                <div className="bg-primary wrapper-md r">
                                    <Link to ="/">
                                        <span className="h4 m-b-xs block">
                                            <i className=" icon-user-follow i-lg"></i> Login or Create account</span>
                                        <span className="text-muted">Save and share your playlist with your friends when you log in or create
                                                        an account.</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="bg-black wrapper-md r">
                                    <Link to ="/">
                                        <span className="h4 m-b-xs block">
                                            <i className="icon-cloud-download i-lg"></i> Download our app</span>
                                        <span className="text-muted">Get the apps for desktop and mobile to start listening music at anywhere
                                                        and anytime.</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                    </section>
                   
                </section>
                <Footer />
                </section>
        )
    }
}
const mapStateToProps = state =>{
    const {users}= state.users;
    return {users}
}
// const mapDispatchToProps=()=>{
//     return listUsers
// }
export default  withRouter(connect(mapStateToProps, {listUsers})(Sectionrad));