import React, { Component } from "react";
import "../../asssets/colors.scss";
import { MdHistory ,MdOutlineMonitor,MdBorderOuter} from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { BsCollection } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineAppstoreAdd ,AiOutlineApi} from 'react-icons/ai';
import {VscServerEnvironment} from 'react-icons/vsc';
import {connect} from "react-redux"
import {RemSaveReq,RemHistory,PushHistory,sellHistAction}  from  "../../actions"
class LeftPart extends Component {
    state = {
        click: "Place",
        active:-1
    }
    changeClick = (val) => {
        let s1 = { ...this.state}
        
        s1.click = val
        this.setState(s1)
    }
    pushHistVal = (index) =>{
        let s1 = {...this.state}
        s1.active=index
        this.props.dispatch(PushHistory(index,this.props.historyArr[index],index))
    }
  render() {
        let { click } = this.state  
        console.log(this.props.historyArr)
        
        return (
            <div >
                <div className="row">
                    <div className="col-8 col-sm-8  mt-2" onClick={() => this.changeClick("Place")} ><FiUser className="mx-2 left-icon"  /><span className="">My WorkPlace</span></div>
                    <div className="col-4 col-sm-4 mt-2">
                        <span className="left-new">
                            New <AiOutlineAppstoreAdd /></span></div>
                </div>
                <div className="row mt-2 border" >
                    <div className="col-3 border   text-center col-sm-3" >
                        <div className="" style={{ height: "600px" }}>
                            <div className="mt-4" onClick={() => this.changeClick("Save")} style={click == "Save" ?  { borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" } : {}}>
                                <BsCollection className="left-icon" /><br />
                                <span className="left-text-font" >Collections</span>
                            </div>
                            <div className="mt-4" onClick={() => this.changeClick("api")} style={click == "api" ?  { borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" }  : {}}>
                                <AiOutlineApi className="left-icon"  /><br />
                                <span className="left-text-font" >API's</span>
                            </div>
                            <div className="mt-4" onClick={() => this.changeClick("env")} style={click == "env" ?  { borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" }  : {}}>
                                <MdBorderOuter className="left-icon" /><br />
                                <span className="left-text-font" >Environments</span>
                            </div>
                            <div className="mt-4" onClick={() => this.changeClick("mon")} style={click == "mon" ?  { borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" }  : {}}>
                                <MdOutlineMonitor className="left-icon"  /><br />
                                <span className="left-text-font" >Monitors</span>
                            </div>
                            <div className="mt-4" onClick={() => this.changeClick("moc")} style={click == "moc" ? { borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" } : {}}>
                                <VscServerEnvironment className="left-icon"  /><br />
                                <span className="left-text-font"  >Mock Servers</span>
                            </div>
                            <div className="mt-4" onClick={() => this.changeClick("History")} style={click == "History" ?  { borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" }  : {}}>
                                <MdHistory className="left-icon" /><br />
                                <span className="left-text-font" >History</span>
                            </div>
                        </div>
                        
                    </div>
                    {
                        click == "Save"
                            ? <div className="col-9 col-sm-9 hist-Scrol " >
                                {this.props.saveRequest.length == 0 ? <img className="mt-5 img-fluid " src="https://assets.materialup.com/uploads/c83a9663-be0b-4397-b1af-67f520e44ef1/preview.png" width="300px" height="200px" />
                                    : this.props.saveRequest.map((op, index) => (
                                        <div className="row text-center border" >
                                            <div className="col-3 col-sm-3 mt-2 text-success">{op.status}</div>
                                            <div className="col-6 col-sm-6 mt-2 hist-Val">{op.sendVal}</div>
                                            <div className="col-3  col-sm-3"><button className="btn btn-light"><RiDeleteBin6Line onClick={() => this.props.dispatch(RemSaveReq(index))} /></button></div>
                                        </div>))}
                            </div>

                            : click == "History"
                                ? <div className="col-9 col-sm-9  hist-Scrol" >
                                    {this.props.historyArr.length == 0 ? <img className="mt-5 img-fluid " src="https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg" width="300px" height="200px" />
                                        : this.props.historyArr.map((op, index) => (
                                            <div className="row text-center border"  style={this.props.histVal.index==index?{borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" }:{}}>
                                                <div className="col-3 col-sm-3 mt-2 text-success">{op.status}</div>
                                                <div className="col-6 col-sm-6 mt-2 hist-Val"   onClick={()=>this.pushHistVal(index)} style={{overflow: "hidden",whiteSpace: "nowrap"}}>{op.sendVal}</div>
                                                <div className="col-3  col-sm-3"><button   className="btn btn-ligth btn-without-border"><RiDeleteBin6Line onClick={() => this.props.dispatch(RemHistory(index))} /></button></div>
                                            </div>))}
                                </div>
                                : click == "Place" ?
                                    <div className="col-9 col-sm-9 mt-3">
                                        <img className="img-fluid" src="https://www.postman.com/assets/postman-api-platform-social-preview.jpg" width="310px" height="200px"></img>
                                    </div>
                                    : ""}
                </div>



            </div>)

    }
}

const mapStateToProps = (state) =>{
     return { historyArr:state.historyArr,saveRequest:state.saveRequest,histVal:state.histVal}
}
export default connect(mapStateToProps)(LeftPart);