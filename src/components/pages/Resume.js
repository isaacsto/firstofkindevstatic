import React from "react";
import "../../App.css";



const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/assets/2025Resume.docx.pdf';
    downloadLink.download = 'IS_Resume.pdf';
    downloadLink.click();
  };

  return (
    
    <div className="resume-page">
      <div className="resume-wrap">
        <div 
          onClick={handleDownload}>
          <p className="tools">
            resume
          </p>
        </div>
      </div>
      </div>
   
  )
}


export default Resume;
