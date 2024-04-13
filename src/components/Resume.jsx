import React from "react";
 
const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "public\Zachary_Chapman_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Zachary_Chapman_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <center>
                <h1>Welcome to Geeks for Geeks</h1>
                <h3>
                    Click on below button to download PDF
                    file
                </h3>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
    );
};
 
export default Resume;