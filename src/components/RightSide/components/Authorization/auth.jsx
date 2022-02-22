import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../../../../asssets/colors.scss"
class Auth extends Component {

    state = {
        authSel: "",
        headers:{},
         header:{ key:"",value:""},
         showPass:false,
         Addto:"Headers"
        }

    handleChange = (e) => {
        let { currentTarget: input } = e
        let s1 = { ...this.state }
        s1.authSel = input.value
        s1.header={key:"",value:""}
        this.setState(s1)
    }
    handleChangeHeader = (e) => {
        let { currentTarget: input } = e
        let s1 = { ...this.state }
        if(s1.authSel=="Bearer Token"){
            s1.header[input.name]=input.value
            s1.headers={"Authorization":"Bearer "+input.value}
        }else if(s1.authSel=="Basic Auth"){
              if(input.name=="showPass"){
                  console.log(input.checked)
                  s1.showPass=input.checked==true?true:false
              }else{
                s1.header[input.name]=input.value
                var auth = 'Basic ' + new Buffer(s1.header.key + ':' + s1.header.value).toString('base64')
                s1.headers={"Authorization":auth}
              }
            
        }else if(s1.authSel=="API Key"){
            s1.header[input.name]=input.value
            if(s1.Addto=="Headers"){
                let arr =[]
                arr.push(s1.header.key)
                arr.push(s1.header.value)
                
                console.log(arr)
                let obj =  Object.assign(arr)
                s1.headers=obj
            }else{

            }
        }
       
        this.props.onPutAuth(s1.headers)
        
        console.log(s1.headers)
        this.setState(s1)
    }

    showBearerField = ( value,key,name) => {
        return (<div className="row">
            <div className="col-2 mt-1">Token</div>
            <div className="col-2"></div>
            <div className="col-8 pb-4">
                <input type="text" 
                value={value}
                name="value" 
                placeholder="Token" 
                className="form-control" 
                onChange={this.handleChangeHeader} /></div>
        </div>)
    }
    showinputField = (lable,value,name,show) => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    {lable}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 form-group">
                    <input
                        className="form-control "
                        style={{ height: "28px" }}
                        type={show==true?"text":"password"}
                        name={name}
                        value={value}
                        onChange={this.handleChangeHeader}
                    />
                </div>
            </div>
        )
    }
    checkPass = (name,op) => {
        return (<div className="row">
            <div className="col-lg-6 col-md-6 col-sm-4 col-xs-6"></div>
            <div className="ccol-lg-5 col-md-4 col-sm-6 col-xs-6 mx-3 form-check pb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={name}
                    value={op}
                    checked={true==op?true:false}
                    onChange={this.handleChangeHeader}
                />
                <label className="form-check-label mx-2"> Show Password</label>
            </div>

        </div>)

    }
    showDropDown = (lable,Arr,value) => {
        return (<div className="row">
             <div className="col-3 col-sm-3">
                    {lable}
                </div>
                <div className="col-3 col-sm3">
                </div>
            <div className="col-5 col-sm-5">
                <Form.Select className="auth-drop" aria-label="Default select example" value="value" name="Addto" onChange={this.handleChangeHeader} style={{height:"33px"}}>
                    {Arr.map(op => <option value={op}>{op}</option>)}
                </Form.Select>
            </div>

        </div>)
    }


    render() {
        let { authHeader } = this.props
        let { authSel ,header,showPass} = this.state
        console.log(authHeader.value)
        let dropArr = ["Headers","Query Params"]
        let optionArr = ["No Auth", "Bearer Token", "Basic Auth"]

        return (<div className="container border auth-height" >
            <div className="row mt-3" >
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="row ">
                        <div className="col-4  mt-2">
                            Type
                        </div>
                        <div className="col-8">
                            <Form.Select className="auth-drop" aria-label="Default select example" value={authSel} name="status" onChange={this.handleChange}>
                                {optionArr.map(op => <option value={op}>{op}</option>)}
                            </Form.Select>
                        </div>
                    </div><br />
                    <p>The authorization header will be automatically generated when you send the request. </p>
                </div>
                <div className="col-xs-8  col-sm-12 col-md-8 col-lg-8">
                    {authSel == "No Auth"
                        ? <span className="pb-4">This request does not use any authorization</span>
                        : authSel == "Bearer Token"
                            ? this.showBearerField(header.value,header.key)
                            : authSel == "Basic Auth"
                                ? <div>
                                    {this.showinputField("UserName",header.key,"key",true)}<br />
                                    {this.showinputField("Password",header.value,"value",showPass)}<br />
                                    {this.checkPass("showPass",showPass)}
                                </div>
                                : authSel == "API Key"
                                    ? <div>
                                        {this.showinputField("Key",header.key,"key",true)}<br />
                                        {this.showinputField("Value",header.value,"value",true)}<br/>
                                        {this.showDropDown("API Key",dropArr)}
                                    </div>
                                    : <p className="mt-3  pb-3">This request does not use any authorization</p>}
                </div>
            </div>
        </div>)

    }
}
export default Auth;