import React from "react";
import "../../App.css";

const styles = {
  contStyle: {
      backgroundColor: "#C3A32C"
  }
}

const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/assets/IS_Resume.pdf';
    downloadLink.download = 'IS_Resume.pdf';
    downloadLink.click();
  };

  return ( 
    <div classNam="resCont" style={styles.contStyle}> 
    <div className="resume-page">
      <div className="res-wrap">
      <h1 className="skills">skills...</h1>
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
        <div>
        <i class="fa-sharp fa-solid fa-arrow-up fa-fade"></i>
        </div>
        </div>
        </div> 
    </div>
  )
}


export default Resume;
