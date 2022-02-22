import React, { Component } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { IoAddOutline } from 'react-icons/io5';
import "../../../../asssets/colors.scss"
class Params1 extends Component {
    state={

    }
    handleChange = (e, ind, index) => {
        let { currentTarget: input } = e
        console.log(input.value, index, ind)
        this.props.onParams(input.value, index, ind)
    }
    checkboxHandle = (e,index)=>{
        let {currentTarget:input} = e
        if(input.checked){
            this.props.onhandle(this.props.paramsArr[index],"checkop",index)
        }else{
            console.log(this.props.paramsArr[index])
            this.props.onhandle(this.props.paramsArr[index],"check",index)
           
        }
    }
    render() {
        let { paramsArr,delParm } = this.props
        delParm.map((i,index1)=>console.log(index1))
        return (<div className="border container response-data">
            <h6 className="mx-1 mt-2">Quary Params
                <button
                    className="mx-3 btn btn-new"
                    onClick={()=>this.props.addParam(1)}>
                    < IoAddOutline />New
                </button>
            </h6>
            <div className="row text-center">
                <div className="col-1 border"></div>
                <div className="col-5 border">Key</div>
                <div className="col-5 border">Value</div>
                <div className="col-1 border"></div>

            </div>
            {paramsArr.map((op, ind) => (
                <div className="row" >
                    <div className="col-1 border from-group" style={delParm.find((i,index1)=>ind==index1)?{backgroundColor:"#d7ded9"}:{}}>
                        <input
                        checked={delParm.find((i,index1)=>ind==index1)?false:true}
                        className="mt-2 from-control check-box" type="checkbox" onChange={(e) => { this.checkboxHandle(e, ind) }}/>
                    </div>
                    {op.map((p, index) => (

                        <div className="col-5 border" style={delParm.find((i,index1)=>ind==index1)?{backgroundColor:"#d7ded9"}:{}}>
                            <input
                                className="form-control"
                                value={p == null ? "" : p}
                                name={p}
                                disabled={delParm.find((i,index1)=>ind==index1)?true:false}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    verticalAlign: "middle"
                                }}
                                onChange={(e) => { this.handleChange(e, index, ind) }}
                                placeholder={index == 0 ? "Key" : "Value"}
                            />
                        </div>

                    ))
                    } <div className="col-1 border"></div></div>
            )).reverse()}
        </div>)



    }
}
export default Params1;