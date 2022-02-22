import React, { Component, component } from "react";
import {Formik,Form,Field,FieldArray,ErrorMessage} from "formik";
import {IoAddOutline}  from 'react-icons/io5';
class Params extends Component {

    handleSelectChange = (event,index,values,handleChange)=>{
        let {name,value} = event.currentTarget;    
        this.props.onParams(values,index)
        handleChange(event)
    }
    render() {
    let {params,paramsArr} = this.props
        return (<div className="border container response-data" >
            <h6 className="mx-1 mt-2">Quary Params</h6>
            <Formik
                initialValues={{
                    paramsArr:paramsArr||[]
                }}
                
                onSubmit={(values) => {
                     
                }}>
                {({ values, handleChange }) => (
                    <Form>
                                <FieldArray name="paramsArr"
                                    render={(arrayHelper) => (
                                            values.paramsArr.map((t1, index) => (
                                                <div className="row" key={index}>
                                                     <div className="col-1 col-sm-1 border  text-center">
                                                     <IoAddOutline className="mt-2" onClick={() => arrayHelper.push("")}/>
                                                      </div>
                                                    <div className="col-5 col-xs-5 border">
                                                        <Field
                                                            name={`paramsArr[${index}].key`}
                                                            type="text"
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                verticalAlign: "middle"
                                                              }}

                                                            placeholder="Key"
                                                            onChange={(e)=>{this.handleSelectChange(e,index,values,handleChange)}}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className=" col-5 col-xs-5 border">
                                                        <Field
                                                            name={`paramsArr[${index}].value`}
                                                            type="text"
                                                            style={{
                                                                border: "none",
                                                                outline: "none",
                                                                verticalAlign: "middle"
                                                              }}
                                                            placeholder="Value"
                                                            onChange={(e)=>{this.handleSelectChange(e,index,values,handleChange)}}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-1 col-xs-1 border  text-center">
                                                         
                                                         </div>
                                                </div>
                                            ))
                                    )} />

                    </Form>
                )}

            </Formik>

            
   

        </div>)



    }
}
export default Params;