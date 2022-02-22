import React, { Component } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { SiPostman } from 'react-icons/si';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ListItem from '@mui/material/ListItem';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { connect } from "react-redux"
import HistoryIcon from '@mui/icons-material/History';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { RemSaveReq, RemHistory, PushHistory } from "../../actions"
class Nav extends React.Component {
    state = {
        state: {
            left: false
        },
        active: -1,
        click: "My WorkPlace",
    }
    pushHistVal = (index) => {
        let s1 = { ...this.state }
        s1.active = index
        this.props.dispatch(PushHistory(index, this.props.historyArr[index], index))
      
    }

    toggleDrawer = (anchor, open) => (event) => {
        let s1 = { ...this.state }
        console.log(anchor)
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        s1.state.left = open
        this.setState(s1);
    };
    changeClick = (val) => {
        let s1 = { ...this.state }
        console.log(val)
        s1.click = val
        this.setState(s1)
    }
     
    removeHist = (index)=>{
        let s1 ={...this.state}
        this.props.dispatch(RemHistory(index))
        this.setState(s1)
    }
    removeSave = (index)=>{
        let s1 ={...this.state}
        this.props.dispatch(RemSaveReq(index))
        this.setState(s1)
    }

    list = (anchor) => {
        let { click } = this.state
        return (<Box
            
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 ,height:20}}
            role="presentation"

            onKeyDown={this.toggleDrawer(anchor, false)}
        >{click == "My WorkPlace"
            ? <List>
                {['My WorkPlace', 'Collections', 'History'].map((text, index) => (
                    <ListItem button key={text} onClick={() => this.changeClick(text)}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            : click == "History"
                ?<List> <div className="">
                    <div className="row border">
                        <div className="col-9">
                            <ListItem>
                                <HistoryIcon /> <span className="mx-1">History</span></ListItem>
                        </div>
                        <div className="col-3">
                            <ListItem button onClick={() => this.changeClick("My WorkPlace")}>
                                <ListItemIcon>
                                    <ArrowBackIosNewIcon />
                                </ListItemIcon>
                            </ListItem>
                        </div>
                    </div>
                    {this.props.historyArr.length == 0 ? <img className=""  style={{marginLeft:"50px"}} src="https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg" width="200px" height="120px" />
                        : <List>{this.props.historyArr.map((op, index) => (
                            <div className="row text-center border" onClick={this.toggleDrawer(anchor, false)} style={this.props.histVal.index == index ? { borderLeft: '3px solid #f75611', backgroundColor: "lightgrey" } : {}}>
                                <div className="col-3   mt-2 text-success"><ListItemText button primary={op.status} /></div>
                                <div className="col-6  mt-2"RemHistory
                                    style={{ fontSize: "14px", overflow: "hidden", whiteSpace: "nowrap" }}
                                    onClick={() => this.pushHistVal(index)}><ListItemText primary={op.sendVal} /></div>
                                <div className="col-2 mt-1  mx-2"><ListItem button onClick={() => this.removeHist(index)}>
                                        <ListItemIcon >
                                            <DeleteForeverIcon />
                                        </ListItemIcon>

                                    </ListItem></div>
                            </div>))}</List>}
                </div></List>
                : click == "Collections"
                    ? <List> <div className="">
                    <div className="row border">
                        <div className="col-9">
                            <ListItem>
                                <CollectionsBookmarkIcon /> <span className="mx-1">Collections</span></ListItem>
                        </div>
                        <div className="col-3">
                            <ListItem button onClick={() => this.changeClick("My WorkPlace")}>
                                <ListItemIcon>
                                    <ArrowBackIosNewIcon />
                                </ListItemIcon>
                            </ListItem>
                        </div>
                    </div>
                    {this.props.saveRequest.length == 0 ? <img className="" style={{marginLeft:"50px"}} src="https://s3.amazonaws.com/www-inside-design/uploads/2015/06/emptystates-feature.jpg" width="200px" height="120px" />
                        : <List>{this.props.saveRequest.map((op, index) => (
                            <div className="row text-center border" style={this.props.histVal.index == index ? { borderLeft: '3px solid #f75611', backgroundColor: "lightgrey" } : {}}>
                                <div className="col-3   mt-2 text-success"><ListItemText primary={op.status} /></div>
                                <div className="col-6  mt-2"
                                    style={{ fontSize: "14px", overflow: "hidden", whiteSpace: "nowrap" }}
                                    onClick={() => this.pushHistVal(index)}><ListItemText primary={op.sendVal} /></div>
                                <div className="col-2 mt-1  mx-2"><ListItem button onClick={() => this.removeSave(index)}>
                                        <ListItemIcon >
                                            <DeleteForeverIcon />
                                        </ListItemIcon>

                                    </ListItem></div>
                            </div>))}</List>}
                </div></List> : ""}

            <Divider />
        </Box>
        );
    }
    render() {
        let { state } = this.state
        return (<div className="container">
            <div className="row">
                <div className="col-10">
                    <a className="navbar-brand mx-2 text-danger" href="#"><SiPostman className="left-icon" /><span className="mx-2 mt-3">PostMan</span></a>
                </div>
                <div className="col-2">
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={this.toggleDrawer(anchor, true)}><ViewHeadlineIcon /></Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={this.toggleDrawer(anchor, false)}
                                onOpen={this.toggleDrawer(anchor, true)}
                            >
                                {this.list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>


            </div>
        </div>);
    }


}
const mapStateToProps = (state) => {
    return { historyArr: state.historyArr, saveRequest: state.saveRequest, histVal: state.histVal }
}
export default connect(mapStateToProps)(Nav);
