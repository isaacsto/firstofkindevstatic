import React from 'react';
import '../../App.css';


function Projects() {
    return(

<section class="projects">
<h3 class="header-three">Work</h3>
<div class="row-card">
<div className="card1">
    <div className="card-body">
         <h5 className="card-title">
         <a href="https://www.thomascookhair.com/" class="card-anchor">Thomas Cook Hair</a>
         </h5>
    </div>  
    </div>     
{/* 
 <div className="card2">
    <div className="card-body">
         <h5 className="card-title">
         <a href="https://nameless-springs-87426-ab7084b2cd1d.herokuapp.com" class="card-anchor">Artly</a>
         <a href="https://github.com/Cashew1337/Art-Dealer" class="card-anchor"><i class="fab fa-github"></i></a>
         </h5> 
    </div>            
 </div> */}


 <div className="card4">
    <div className="card-body">
         <h5 className="card-title">
         <a href="https://it-interface-1.onrender.com" class="card-anchor">Chat GPT API Call and Interface</a>
         </h5> 
    </div>            
 </div>
  <div className="card3">
    <div className="card-body">
    <h5 className="card-title">
         <a href="https://huggingface.co/spaces/isaacstofko/lead-prediction-model" class="card-anchor">Lead Predictive Model Prototype</a>
         </h5> 
    </div>        
 </div>

 <div className="card5">
    <div className="card-body">
    <h5 className="card-title">
         <a href="https://krisd.onrender.com" class="card-anchor">Kris DeGirolamo Portfolio</a>
         
         </h5>
       </div>
    </div>           
 </div>



</section>
    )
}

export default Projects;