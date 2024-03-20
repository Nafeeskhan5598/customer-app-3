import React from "react";

function DownloadBtn() {

    const onButtonClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>

                <button className="bg-blue-900 p-2 text-white" onClick={onButtonClick}>
                    Download PDF
                </button>
        </>
    )
}

export default DownloadBtn;