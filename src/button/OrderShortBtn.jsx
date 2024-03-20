import React from "react";
import Dropdown from "../common/Dropdown";

function OrderShortBtn(props){

    return(
        <>
        <div className="todo-area">
                        <div className="todo-text">
                            <h3 className="todo-heading-txt">{props.todoHeading}</h3>
                            <span className="todo-record">Total Records 1544</span>
                        </div>
                        <div className="dropdown-boxs">
                            < Dropdown
                                dropHeading="SORT BY"
                                dropBg="#0a81ff"
                                dropWidth='100%'
                                dropFont='11px'
                                dropPadding='8px 0px'
                                dropColor='white'
                                dropOp1='SORT By'
                                dropOp2='Mrs'
                                dropOp3='Ms'
                                dropOp4='Miss'
                                dropOp5='Mr'
                            />
                            < Dropdown
                                dropHeading="ORDER BY"
                                dropBg="#0a81ff"
                                dropWidth='100%'
                                dropFont='11px'
                                dropPadding='8px 0px'
                                dropColor='white'
                                dropOp1='ORDER BY'
                                dropOp2='Create Date'
                                dropOp3='Update Date'
                                dropOp4='Name'
                                dropOp5='Mr'
                            />
                        </div>
                    </div>
        </>
    )
}
export default OrderShortBtn;