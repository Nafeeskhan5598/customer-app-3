import React from "react";

function InputDate() {
    
    return (
        <>
            <input name="requested_order_ship_date" type="date"
                disabled={this.state.mode}
                value={moment(this.state.item.requested_order_ship_date).format("DD-MMM-YYYY")}
                className="form-control" onChange={this.handleInputChange} />

        </>
    )
}
export default InputDate;