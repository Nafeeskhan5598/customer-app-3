import React from "react";

function PageHeading(props) {

    return (
        <>

            <div className="contact-heading p-2 text-center">
                <h3 className="text-2xl font-bold"> {props.pageHeading}</h3>
                <p>{props.pageHeadingPeragraph}</p>
            </div>
        </>
    )
}
export default PageHeading;