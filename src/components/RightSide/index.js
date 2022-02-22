import React, { Component, component } from "react";
import { MdAdd } from 'react-icons/md';
import { AiOutlineEye, AiOutlineSave, AiOutlineGlobal, AiOutlineDown } from 'react-icons/ai';
import http from "../../services/http";
import queryString from "query-string";
import '../../asssets/colors.scss';
import { Form } from "react-bootstrap";
import { connect } from "react-redux"
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Params1, Headers, Body, Auth } from "../RightSide/components"
import { sellHistAction, PushHistory, sellSaveAction } from "../../actions"
class RightSide extends Component {

    state = {
        header: [{ key: '', value: "" }],
        authHeader: { key: "", value: "" },
        delParm: [],
        sendReq: {
            sendVal: "", status: "GET"
        },
        paramsArr: [], countParams: 2,
        params: 0,
        //  sendReq:this.props.sendReq,
        data: {},
        click: 0,
        headers: {},
        headersAuth: {},
        changeVal: {
            radioVal: "",
            selType: "Text",
            textVal: ""
        }
    }


    handleChange = (e) => {
        let { currentTarget: input } = e
        let s1 = { ...this.state }
        s1.sendReq[input.name] = input.value
        let len = input.value.indexOf("?")

        if (s1.sendReq.sendVal.indexOf("?") > -1) {
            let val = ''
            for (let i = len; i < s1.sendReq.sendVal.length; i++) {
                val = val + s1.sendReq.sendVal[i]
            }

            let queryParams = queryString.parse(val);
            s1.paramsArr = Object.entries(queryParams)
        }


        // if(arr[len]=="&"){
        //   s1.params=s1.params+1
        // s1.paramsArr[s1.params]={key:"",value:""}

        //}
        //else if(s1.sendReq.sendVal.indexOf("?")>0){
        //  const paramsString = s1.sendReq.sendVal.split('?')[1];
        //const eachParamArray = paramsString.split('&');
        //console.log(eachParamArray)
        //eachParamArray.forEach((param) => {

        //    const key = param.split('=')[0];
        //  const value = param.split('=')[1];
        //    Object.assign(s1.paramsArr[s1.params], {key:key, value:value});
        //});

        //}
        //if(this.props.histVal.active>0){

        //}

        this.setState(s1)

    }
    async Api(selVal, obj) {
        let s1 = { ...this.state }
        let newheader = { ...s1.headers, ...s1.headersAuth }
        let json = {
            method: s1.sendReq.status,
            url: s1.sendReq.sendVal,
            headers: newheader,
            body: obj
        }
        let response = null
        try {
            response = await http.POST("/postUrl", json)
            console.log(response)
        } catch (ex) {
            if (ex.response && ex.response.status === 404) {
                console.log(ex.response.data)
                response = ex.response
            }
        }
        var res = Object.entries(response.data);
        console.log(res)
        this.props.dispatch(sellHistAction(s1.sendReq.status, s1.sendReq.sendVal))
        this.setState({ data: response })
    }

    sendRequset = () => {
        let s1 = { ...this.state }
        if (s1.sendReq.status == "POST" || s1.sendReq.status == "PUT") {
            if (s1.changeVal.selType == "Text") {
                this.Api(s1.sendReq.sendVal, s1.changeVal.textVal)
            }
            else if (s1.changeVal.selType == "JSON") {
                let text = JSON.parse(s1.changeVal.textVal)
                console.log(text)
                this.Api(s1.sendReq.sendVal, text)
            }
        } else {

            this.Api(s1.sendReq.sendVal)
        }
    }
    clickChange = (val) => {
        let s1 = { ...this.state }
        s1.click = val
        this.setState(s1)
    }
    handleChangeBodyVal = (name, val) => {
        let s1 = { ...this.state }
        s1.changeVal[name] = val
        this.setState(s1)
    }
    convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
            return {
                ...obj,
                [item[key]]: item.value,
            };
        }, initialValue);
    };
    onChangeHeaders = (val) => {
        let s1 = { ...this.state }
        let arr = []
        val.header.map(p => {
            arr.push({ key: p.key, value: p.value })

        })
        console.log(arr)
        let ass = this.convertArrayToObject(arr, "key")

        s1.header = val
        s1.headers = ass
        let newObj = { ...s1.headers, ...s1.headersAuth }
        console.log(newObj)
        this.setState(s1)
    }
    handleChangeParams = (val, ind1, ind2) => {
        let s1 = { ...this.state }
        s1.paramsArr[ind1][ind2] = val
        //s1.paramsArr = val.paramsArr
        const searchParams = new URLSearchParams();
        s1.paramsArr.map((op, index) => {
            searchParams.append(op[0], op[1] == null ? "" : op[1]);
        })
        console.log(searchParams.toString())
        let len = s1.sendReq.sendVal.indexOf("?")
        let curVal = ''
        if (len >= 0) {
            for (let i = 0; i <= len; i++) {
                curVal = curVal + s1.sendReq.sendVal[i]
            }
        }
        s1.sendReq.sendVal = curVal + searchParams.toString()
        //s1.sendReq.sendVal="?"+searchParams.toString()
        //console.log(s1.paramsArr[index])
        //if(s1.paramsArr[index].key==""&&s1.paramsArr[index].value==""){
        //  console.log("hy")
        //s1.paramsArr.splice(index,1)
        //}

        this.setState(s1)
    }
    onChangeParamsString = (val, type, ind) => {
        let s1 = { ...this.state }
        let len = s1.sendReq.sendVal.indexOf("?")
        let val1 = s1.sendReq.sendVal.substr(len + 1, s1.sendReq.sendVal.length)
        if (type == "check") {
            const params = new URLSearchParams(val1)
            params.delete(val[0])
            console.log(params.toString())
            let st1 = s1.sendReq.sendVal.substr(0, len + 1)
            let st2 = params.toString()
            console.log(st1, st2)
            s1.delParm[ind] = { val1: val[0], val2: val[1], url: s1.sendReq.sendVal }
            s1.sendReq.sendVal = st1 + st2

        } else {
            console.log("hy")
            var url = new URL("https://" + s1.delParm[ind].url);
            url.searchParams.set(s1.delParm[ind].val1, s1.delParm[ind].val1);
            let str = url.hostname + url.search
            s1.delParm.splice(ind, 1)
            s1.sendReq.sendVal = str

        }


        this.setState(s1)
    }
    addNewParam = (val) => {
        let s1 = { ...this.state }
        s1.paramsArr.push(["", ""])
        this.setState(s1)
    }
    callForHistComes = () => {
        let s1 = { ...this.state }
        s1.sendReq = this.props.histVal.json
        let len = s1.sendReq.sendVal.indexOf("?")
        let queryParams = null
        if (s1.sendReq.sendVal.indexOf("?") > -1) {
            let val = ''
            for (let i = len; i < s1.sendReq.sendVal.length; i++) {
                val = val + s1.sendReq.sendVal[i]
            }

            queryParams = queryString.parse(val);

        }
        console.log(queryParams)
        if (queryParams) {
            console.log("by")
            s1.paramsArr = Object.entries(queryParams)
        } else {
            console.log("hy")
            s1.paramsArr = [["", ""]]
        }
        this.props.dispatch(PushHistory(-1, {}, this.props.histVal.index))
        this.setState(s1)
    }

    onPutAuthHeader = (val) => {
        let s1 = { ...this.state }
        var result = Object.entries(val);
        let arr = []
        result.map(p => {
            arr.push({ key: p[0], value: p[1] })

        })
        console.log(arr)
        let ass = this.convertArrayToObject(arr, "key")
        console.log(ass)
        s1.headersAuth = val
        this.setState(s1)
    }
    render() {
        let { sendReq, delParm, data, click, authHeader, changeVal, header, paramsArr, countParams } = this.state
        let optionArr = ["GET", "POST", "PUT","DELETE"]
        //let queryParams = queryString.parse("type=all&query=coins&query1=coins&query5=coins");
        console.log(this.props.historyArr)
        if (this.props.histVal.active >= 0) {
          console.log(this.props.histVal.active)
         this.callForHistComes()

        }
        return (<div>
            <div className=" border"  style={{ flexGrow: 1 ,height:45 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1} sm={1} lg={1} md={1}>
                        <MdAdd className="mx-2 mt-3" />
                    </Grid>
                    <Grid item xs={2} sm={2} lg={5} md={5}>
                       
                    </Grid>
                    <Grid item xs={6} sm={6} lg={4} md={4}>
                        <div className="mt-2 mx-3" >No Environment <AiOutlineDown /></div>
                    </Grid>
                    <Grid item xs={1} sm={1} lg={1} md={1}>
                        <  AiOutlineEye className="mx-5 mt-3" />
                    </Grid>
                </Grid>
            </div>
           
            <Box className="mt-2" sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={9} sm={9} lg={10} md={10}>
                        <h6 className="mx-2 mt-2 ">{sendReq.sendVal == "" ? "Untitled Request" :sendReq.sendVal.charAt(0)=="h"? sendReq.sendVal : "https://" + sendReq.sendVal}</h6>
                    </Grid>
                    <Grid item xs={3} sm={3} lg={2} md={2}>
                        <button className="btn btn-save" style={{ fontSize: "12px" }}
                            onClick={() => this.props.dispatch(sellSaveAction(sendReq.status, sendReq.sendVal))}>
                            <AiOutlineSave /><span className="mx-1">Save</span>
                        </button>
                    </Grid>
                </Grid>
            </Box>

            <div className="row mt-2">
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
                    <div class="input-group mx-2" style={{ paddingRight: "18px" }}>
                        <div className="input-group-select ">
                            <Form.Select aria-label="Default select example" value={sendReq.status} name="status" onChange={this.handleChange}>
                                {optionArr.map(op => <option value={op}>{op}</option>)}
                            </Form.Select>
                        </div>
                        <input className="form-control" type="text" placeholder="Enter Request URL" name="sendVal" onChange={this.handleChange} value={sendReq.sendVal} />
                    </div></div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
                    <div class="row input-group-btn send-btn mx-2">
                        <button className="btn btn-primary" onClick={() => this.sendRequset()}>Send</button>
                    </div>
                </div>
            </div>


            <Box className="mt-2" sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={9} sm={9} lg={10} md={10}>
                        <Box sx={{ flexGrow: 1, maxWidth: 680, bgcolor: 'background.paper' }}>
                            <Tabs
                                value={click}
                                variant="scrollable"
                                scrollButtons
                                aria-label="visible arrows tabs example"
                                sx={{
                                    [`& .${tabsClasses.scrollButtons}`]: {
                                        '&.Mui-disabled': { opacity: 0.3 },
                                    },
                                }}
                            >
                                <Tab label="Params" onClick={() => this.clickChange(0)} />
                                <Tab label="Authorization" onClick={() => this.clickChange(1)} />
                                <Tab label="Headers" onClick={() => this.clickChange(2)} />
                                <Tab label="Pre-request Script" onClick={() => this.clickChange(3)} />
                                <Tab label="Body" onClick={() => this.clickChange(4)} />
                                <Tab label="Tests" onClick={() => this.clickChange(5)} />
                                <Tab label="Setting" onClick={() => this.clickChange(6)} />
                            </Tabs>
                        </Box>

                    </Grid>
                    <Grid style={{ paddingTop: "35px" }} item xs={3} sm={3} lg={2} md={2}>

                        <span style={{ color: "blue" ,paddingLeft:"10px" }}>Cookie</span>

                    </Grid>
                </Grid>
            </Box>

            <Box>
                {click == 0
                    ? <Params1 delParm={delParm} addParam={this.addNewParam} onhandle={this.onChangeParamsString} onParams={this.handleChangeParams} paramsArr={paramsArr} />
                    : click == 4
                        ? <Body changeVal={changeVal} onChangeBody={this.handleChangeBodyVal} />
                        : click == 2
                            ? <Headers header={header} onHeader={this.onChangeHeaders} />
                            : click == 3 || click == 6 || click == 5
                                ? <div className="border container response-data" style={{ height: "190px" }}>
                                </div>
                                : click == 1
                                    ? <Auth authHeader={authHeader} onPutAuth={this.onPutAuthHeader} />
                                    : ""}
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                {data.data == undefined ?
                    <div className="border response-data" >
                        <span className="m-3">Response</span><br />
                        <img className="img-response" src="https://crowtrader.com/wp-content/uploads/2020/01/demo-10-left-image.png" />
                    </div> 
                    :data.data == null 
                    ?<h6>404</h6>

                    : <Box sx={{ flexGrow: 1 }}>
                        <Grid container >
                            <Grid item xs={5} md={7} lg={7} className="mx-2 pt-1" style={{ borderBottom: "1px" }}>Body</Grid>

                            <Grid item xs={5} md={7} lg={4} className="pt-1 text-success" ><AiOutlineGlobal /><span className="mx-2">{data.status} {data.statusText}</span></Grid>

                        </Grid>
                        <div
                            className="">
                            <textarea
                                className="mt-1 form-control"
                                rows="7"
                                value={JSON.stringify(data.data, null, 2)}
                            />

                        </div>
                    </Box>
                }
            </Box>
        </div>)

    }
}

const mapStateToProps = (contacts) => {
    return { histVal: contacts.histVal, historyArr: contacts.historyArr }
}
export default connect(mapStateToProps)(RightSide);