import React from "react";
import "../../App.css";


const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/assets/Tech-Resume.txt';
    downloadLink.download = 'Tech-Resume.txt';
    downloadLink.click();
  };

  return ( 
    <div className="resume-page">
     {/*  <h1>skills...</h1> */}
      <div class="circle"
      onClick={handleDownload}>
     <p className="tools">
      HTML <br></br>
      CSS<br></br>
      JAVASCRIPT<br></br>
      NODE.JS<br></br>
      EXPRESS<br></br>
      SQL /
      NOSQL<br></br>
      REACT <br></br>
      </p>
        </div>
    </div>
  )
}


export default Resume;
