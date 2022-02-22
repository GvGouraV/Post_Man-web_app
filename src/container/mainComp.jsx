import React, { Component } from "react"
import NavBar from "./NavBar/NavBar";
import {DeskSize,MobSize} from "../components/LeftSide"
import RightSide from "../components/RightSide"
class MainComp extends Component {

//<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4  border left-desk" style={{ backgroundColor: "#fcfcfc" }}>
  //                  <MobLeft  />
    //            </div>
    render() {
      
        return (<div style={{overflowY:"hidden",overflowX:"hidden"}}>
            <div className="left-desk">
            <MobSize/>
            </div>
            <div className="left-mob">
            <NavBar />
            </div>    
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4  left-mob  border">
                    <DeskSize   />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8   border">
                    <RightSide  />
                </div>
            </div>
        </div>)

    }
}
export default MainComp;