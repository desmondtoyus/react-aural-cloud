import React, { Component } from "react";
import Rightsidefooter from "./rightsidefooter";
class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark" style={{ position: "fixed", width:'100%'}}>
        <div id="jp_container_N" className="jp-video-270p">
          <div className="jp-type-playlist">
            <div
              id="jplayer_N"
              className="jp-jplayer hide"
              style={{ width: "480px", height: "270px" }}
            >
              <img
                id="jp_poster_0"
                src="./assets/m0.jpg"
                style={{ width: "480px", height: "270px", display: "inline" }}
                alt="my desc"
              />
              <audio
                id="jp_audio_0"
                preload="metadata"
                src="http://flatfull.com/themes/assets/musics/Miaow-07-Bubble.ogg"
                title="Bubble"
              />
              <video
                id="jp_video_0"
                preload="metadata"
                title="Bubble"
                style={{ width: "0px", height: "0px" }}
              />
            </div>
            
            <div className="jp-gui" style={{height:'60px'}}>
              <div className="jp-video-play hide" style={{ display: "none" }}>
                <a className="jp-video-play-icon">play</a>
              </div>
              <div className="jp-interface">
                <div className="jp-controls">
                  <div>
                    <a className="jp-previous">
                      <i className="icon-control-rewind i-lg" />
                    </a>
                  </div>
                  <div>
                    <a className="jp-play" style={{ display: "none" }}>
                      <i className="icon-control-play i-2x" />
                    </a>
                    <a className="jp-pause hid" style={{ display: "inline" }}>
                      <i className="icon-control-pause i-2x" />
                    </a>
                  </div>
                  <div>
                    <a className="jp-next">
                      <i className="icon-control-forward i-lg" />
                    </a>
                  </div>
                  <div className="hide">
                    <a className="jp-stop">
                      <i className="fa fa-stop" />
                    </a>
                  </div>
                  <div>
                    <a
                      className=""
                      data-toggle="dropdown"
                      data-target="#playlist"
                    >
                      <i className="icon-list" />
                    </a>
                  </div>
                  <div className="jp-progress hidden-xs">
                    <div className="jp-seek-bar dk">
                      <div
                        className="jp-play-bar bg-info"
                        style={{ width: "15.5926%" }}
                      />
                      <div
                        className="jp-title text-lt"
                        style={{ display: "none" }}
                      >
                        Bubble
                      </div>
                    </div>
                  </div>
                  <div className="hidden-xs hidden-sm jp-current-time text-xs text-muted">
                    00:32
                  </div>
                  <div className="hidden-xs hidden-sm jp-duration text-xs text-muted">
                    03:29
                  </div>
                  <div className="hidden-xs hidden-sm">
                    <a className="jp-mute" title="mute">
                      <i className="icon-volume-2" />
                    </a>
                    <a
                      className="jp-unmute hid"
                      title="unmute"
                      style={{ display: "none" }}
                    >
                      <i className="icon-volume-off" />
                    </a>
                  </div>
                  <div className="hidden-xs hidden-sm jp-volume">
                    <div className="jp-volume-bar dk">
                      <div
                        className="jp-volume-bar-value lter"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <a className="jp-shuffle" title="shuffle">
                      <i className="icon-shuffle text-muted" />
                    </a>
                    <a
                      className="jp-shuffle-off hid"
                      title="shuffle off"
                      style={{ display: "none" }}
                    >
                      <i className="icon-shuffle text-lt" />
                    </a>
                  </div>
                  <div>
                    <a className="jp-repeat" title="repeat">
                      <i className="icon-loop text-muted" />
                    </a>
                    <a
                      className="jp-repeat-off hid"
                      title="repeat off"
                      style={{ display: "none" }}
                    >
                      <i className="icon-loop text-lt" />
                    </a>
                  </div>
                  <div className="hide">
                    <a className="jp-full-screen" title="full screen">
                      <i className="fa fa-expand" />
                    </a>
                    <a
                      className="jp-restore-screen"
                      title="restore screen"
                      style={{ display: "none" }}
                    >
                      <i className="fa fa-compress text-lt" />
                    </a>
                  </div>
                  <Rightsidefooter />
                </div>
              </div>
            </div>
            <div className="jp-playlist dropup" id="playlist">
              <ul
                className="dropdown-menu aside-xl dker"
                style={{ display: "block" }}
              >
                <li className="jp-playlist-current">
                  <div>
                    <a href="/" className="jp-playlist-item-remove">
                      ×
                    </a>
                    <a
                      href="/"
                      className="jp-playlist-item jp-playlist-current"
                      tabIndex="1"
                    >
                      Bubble
                      <span className="jp-artist">by Miaow</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="/" className="jp-playlist-item-remove">
                      ×
                    </a>
                    <a href="/" className="jp-playlist-item" tabIndex="1">
                      Lentement
                      <span className="jp-artist">by Miaow</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="/" className="jp-playlist-item-remove">
                      ×
                    </a>
                    <a href="/" className="jp-playlist-item" tabIndex="1">
                      Partir
                      <span className="jp-artist">by Miaow</span>
                    </a>
                  </div>
                </li>
              </ul>
             
            </div>
            <div className="jp-no-solution hide" style={{ display: "none" }}>
              <span>Update Required</span> To play the media you will need to
              either update your browser to a recent version or update your
              <a
                href="http://get.adobe.com/flashplayer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flash plugin
              </a>
              .
            </div>
           
          </div>
        
        </div>
      </footer>
    );
  }
}

export default Footer;
