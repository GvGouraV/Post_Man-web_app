import React, { Component } from "react"
import "../../../../asssets/colors.scss"
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Form } from "react-bootstrap";
class Body extends Component {




  handleChange = (e) => {
    let { currentTarget: input } = e
 
    this.props.onChangeBody(input.name,input.value)
  }

  showRadio = (op, name, val) => {

    return (
        <div className="form-check-inline ">
          <input
            className="form-check-input mt-2"
            style={{ fontSize: "12px" }}
            type="radio"
            name={name}
            value={op}
            checked={val == op}
            onChange={this.handleChange}
          />
          <label className="form-check-label-inline mx-1"> {op}</label>
      </div>
    );
  };

  render() {
   
       let {changeVal} = this.props
    let radioArr = ["none", "raw", "form-data"]
    return (<div className="mx-1 mt-1 danger">
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-3  col-xl-3   mt-2">
          {this.showRadio("none", "radioVal", changeVal.radioVal)}
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3  col-xl-3  mt-2">
          {this.showRadio("form-data", "radioVal", changeVal.radioVal)}
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3  col-xl-3  mt-2">
          {this.showRadio("raw", "radioVal", changeVal.radioVal)}
        </div>
        <div className="col-sm-6  col-md-4 col-lg-3  col-xl-3 ">
          {changeVal.radioVal == "raw"
            && <span>
               <Form.Select aria-label="Default select example" onChange={this.handleChange} value={changeVal.selType} name="selType"
               style={{
                border: "none",
                outline: "none",
                width: "90px",
                verticalAlign: "middle"
              }}>
               <option value="JSON">JSON</option>
                <option value="TEXT">Text</option>
                <option value="HTML">HTML</option>
                            </Form.Select>
             </span>}
        </div>
      </div>
      {
        changeVal.radioVal == "none"
          ? <div className="hight-150" ></div>
          : changeVal.radioVal == "raw"
            ? <div className="hight-150">
              <textarea 
                className="form-control"
                rows="5"
                value={changeVal.textVal}
                 name="textVal" 
                 onChange={this.handleChange} 
                ></textarea>
            </div>
            : <div className="hight-150"></div>
      }


    </div >)

  }

}
export default Body;
