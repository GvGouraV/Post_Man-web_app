import React, { Component } from "react";
import { MdHistory } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { BsCollection } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import {connect} from "react-redux"
import {RemSaveReq,RemHistory,PushHistory}  from  "../../actions"

class MobLeft extends Component {
    state = {
        click: "Place",
        active:-1
    }
    changeClick = (val) => {
        let s1 = { ...this.state }
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

        return (<div>
            <div className="border row container  text-center" >
                <div className="mt-2 col-4 col-sm-4 "  onClick={() => this.changeClick("Place")} style={click == "Place" ? { borderBottom: '3px solid #f75611' } : {}}>
                <FiUser /><span className="my-place mx-1" > My WorkPlace</span></div>
                <div className="col-sm-4 col-4 mt-2" onClick={() => this.changeClick("Save")} style={click == "Save" ? { borderBottom: '3px solid #f75611' } : {}}>
                    <BsCollection style={{ fontSize: "16px" }} />
                    <span className="mx-1" style={{ fontSize: "12px" }}>Collections</span>
                </div>

                <div className="col-sm-4 col-4 mt-2" onClick={() => this.changeClick("History")} style={click == "History" ? { borderBottom: '3px solid #f75611' } : {}}>
                    <MdHistory style={{ fontSize: "20px" }} />
                    <span className="mx-1" style={{ fontSize: "12px" }}>History</span>
                </div>
            </div>
            {
                click == "Save"
                    ? <div className=" imgHistory mob-scrol">
                        {this.props.saveRequest.length == 0 ? <img className="img-fluid  " style={{ marginLeft: "80px" }}src="https://assets.materialup.com/uploads/c83a9663-be0b-4397-b1af-67f520e44ef1/preview.png"  width="200px" height="120px" />
                            :this.props.saveRequest.map((op, index) => (
                                <div className="row text-center border">
                                    <div className="col-3 col-sm-3 mt-2 text-success">{op.status}</div>
                                    <div className="col-6 col-sm-6  mt-2" style={{ fontSize: "14px", overflow: "hidden", whiteSpace: "nowrap" }}>{op.sendVal}</div>
                                    <div className="col-2 mt-1 col-sm-2 mx-2"><RiDeleteBin6Line onClick={() => this.props.dispatch(RemSaveReq(index))} /></div>
                                </div>))}
                    </div>

                    :click=="History" ?
                    <div className="imgHistory mob-scrol">
                        {this.props.historyArr.length == 0 ? <img className="img-fluid imgHistory" style={{ marginLeft: "80px" }} src="https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg"  width="200px" height="120px" />
                            : this.props.historyArr.map((op, index) => (
                                <div className="row text-center border"  style={this.props.histVal.index==index?{borderLeft: '3px solid #f75611',backgroundColor:"lightgrey" }:{}}>
                                    <div className="col-3 col-sm-3  mt-2 text-success">{op.status}</div>
                                    <div className="col-6 col-sm-6 mt-2" 
                                    style={{ fontSize: "14px", overflow: "hidden", whiteSpace: "nowrap" }} 
                                     onClick={()=>this.pushHistVal(index)}>{op.sendVal}</div>
                                    <div className="col-2 mt-1 col-sm-2 mx-2"><RiDeleteBin6Line onClick={() => this.props.dispatch(RemHistory(index))} /></div>
                                </div>))}
                    </div>
                    :click=="Place"?
                    <div className="img-post ">
                      <img  className="img-fluid" src="https://www.postman.com/assets/postman-api-platform-social-preview.jpg" width="400px" height="120px"></img>    
                    </div>
                    :""}

        </div >)
    }
}

 const mapStateToProps = (state) =>{
      return { historyArr:state.historyArr,saveRequest:state.saveRequest,histVal:state.histVal}
 }
 export default connect(mapStateToProps)(MobLeft);