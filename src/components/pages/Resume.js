import React from "react";
import "../../App.css";



const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/assets/IS_Resume.pdf';
    downloadLink.download = 'IS_Resume.pdf';
    downloadLink.click();
  };

  return (
    
      <div className="resume-page">
        <div 
          onClick={handleDownload}>
          <p className="tools">
            click to download resume
          </p>
        </div>
      </div>
   
  )
}


export default Resume;
