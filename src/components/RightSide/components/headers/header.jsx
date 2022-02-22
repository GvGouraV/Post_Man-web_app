import React, { Component } from "react";
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import {IoAddOutline}  from 'react-icons/io5';
import {MdDeleteForever } from 'react-icons/md';
import {Formik,Form,Field,FieldArray,ErrorMessage} from "formik";
class Headers extends Component {

    state = {

        click: 0
    }
  
    handleSelectChange = (event,values,handleChange)=>{
        let {name,value} = event.currentTarget;     
        this.props.onHeader(values)
        handleChange(event)
    }
    onChangeClick = (val) => {
        let s1 = { ...this.state }
        console.log(val)
        if (val == 0) {
            s1.click = 1
        } else {
            s1.click = 0
        }
        this.setState(s1)

    }

    headerValues = (key, val, info) => {
        return (
            <div className="row ">
                <div className="col-1 col-sm-1"></div>
                <div className="col-5 col-sm-5 border" ><span>{key}{info ? <HiOutlineInformationCircle /> : ""}</span></div>
                <div className="col-5 col-sm-5 border"><span>{val}</span></div>
                <div className="col-1 col-sm-1"></div>
            </div>)
    }

    render() {
        let { header } = this.props
        return (<div className=" mt-1 container header-data" style={{height:"190px"}}>
            <span className=" mt-2 header-side">Headers</span>
            {this.state.click == 0
                ? <span className="mx-3 header-eye-icon" onClick={() => this.onChangeClick(this.state.click)}><AiOutlineEye />Show auto-generated headers </span>
                : <span className="mx-3 header-eye-icon"  onClick={() => this.onChangeClick(this.state.click)}><AiFillEyeInvisible />Hide auto-generated headers </span>
            }
      


            {this.state.click == 1
                ? <div>
                    {this.headerValues("Key", "Value")}
                    {this.headerValues(`Postman-Token`, "<calculated when request is sent>", "info")}
                    {this.headerValues(`Host`, "<calculated when request is sent>", "info")}
                    {this.headerValues(`User-Agent`, "PostmanRuntime/7.28.4", "info")}
                    {this.headerValues(`Accept`, "*/*", "info")}
                    {this.headerValues(`Accept-Encoding`, "gzip, deflate, br", "info")}
                </div>
                : ""}

            <Formik
                initialValues={{
                    header:header||[]
                }}
                
                onSubmit={(values) => {
                     
                }}>
                {({ values, handleChange }) => (
                    <Form>
                                <FieldArray name="header"
                                    render={(arrayHelper) => (
                                    
                                            values.header.map((t1, index) => (
                                                <div className="row" key={index}>
                                                     <div className="col-1 col-sm-1 mt-1 text-center">
                                                         <IoAddOutline  onClick={() => arrayHelper.push("")}/>
                                                        </div>
                                                    <div className="col-5 col-sm-5 border">
                                                        <Field
                                                            name={`header[${index}].key`}
                                                            type="text"
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                verticalAlign: "middle"
                                                              }}
                                                            placeholder="Key"
                                                            onChange={(e)=>{this.handleSelectChange(e,values,handleChange)}}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className=" col-5 col-sm-5 border">
                                                        <Field
                                                            name={`header[${index}].value`}
                                                            type="text"
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                verticalAlign: "middle"
                                                              }}
                                                            placeholder="Value"
                                                            onChange={(e)=>{this.handleSelectChange(e,values,handleChange)}}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-1 mt-1 col-sm-1 align-middle">
                                                        <MdDeleteForever  onClick={() => arrayHelper.remove(index)}/>                 
                                                    </div>
                                                </div>
                                            ))
                                    )} />

                    </Form>
                )}

            </Formik>

        </div>
        )

    }


} export default Headers;