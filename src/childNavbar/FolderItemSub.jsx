import React from "react";
import { Link } from "react-router-dom";

function FolderItemSub(props) {

    return (

        <>
            <span className="">{props.folderItem}</span> <br />
            <Link
                to=''
                className="border-t-2 p-[8px 0px]">{props.PlotItem}</Link>
        </>
    )
}
export default FolderItemSub;