import React from "react";
import "../../App.css";

const styles = {
  general: {
    width: "80%",
    padding: "60px",
    border: "double 5px",
    margin: "30px",
  },
};

function Resume() {
  return (
    <div className="resume" style={styles.general}>
      <h1>Isaac Stofko</h1>
      <h3>
        {" "}
        Phone: (203) 241-0505 | Email: IsaacStofko@gmail.com | Newtown, CT |
        LinkedIn: /IsaacStofko | GitHub: /isaacsto Portfolio: GitHub:
        /react-portfolio
      </h3>

      <p>
        Full-stack web developer leveraging background in English literature and
        hospitality to be attentive and analytical on the backend while
        providing a unique perspective on how users interact with websites and
        software platforms. Earned a certificate in Full Stack Web Development
        from the University of UCONN Coding Boot Camp. Innovative problem-solver
        who is passionate about developing apps with a focus on mobile-first
        design and development. Strengths in creativity, teamwork, and building
        projects from ideation to execution.
      </p>
      <h3>TECHNICAL SKILLS</h3>
      <p>
        JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
        Express, React, Node, Handlebars, jQuery, Bootstrap
      </p>
      <h4> PROJECTS </h4>
      <p>
        PawsPlus+, More for our Furry Friends | <br></br>
        /molyneauxk93/PawsPlus- |
        /molyneauxk93.github.io/PawsPlus- <br></br>
        Summary: Petfinder app that allows
        users to search and favorite local pets <br></br>
        Role: Utilized and applied
        Petfinder API <br></br>
        Tools: HTML, CSS, JavaScript, Bootstrap
      </p>
      <p>
        DayTryppers | /Cashew1337/Travel-Planner <br></br>
        Summary: Travel Planner app that allows user to select itineraries for different travel destinations
        and connect with other users via the platform <br></br>
        Role: Database management,
        front end designer <br></br>
        Tools: Express Handlebars, CSS, JavaScript, MERN,
        REST, Bootstrap,{" "}
      </p>

      <p>
        Tech-Blog | /isaacsto/Tech-Blog | <br></br>
        Summary: Full stack social media site that allows users to login, post and delete thoughts as well as comment
        on others thoughts <br></br>
        Role: Sole Author <br></br>
        Tools: Express Handlebars, CSS, JavaScript, MERN, REST
      </p>

      <h4>EXPERIENCE</h4>
      
       <h5>Barista 2021-Present Starbucks Coffee Newtown, CT </h5>
        <p>
        Developed a report
        with customers, ensured they received quality beverages in a timely
        manner, worked with my coworkers to optimize procedures in order to
        ensure best possible customer experience 
        <ul>
            <li>Co-created a welcoming
        environment </li>
        <li>Collaborated with other Starbucks Partners to run a smooth
        service 
        </li>
        <li>Helped educate and develop newer baristas' skills</li></ul>
      </p>

     
    <h5> Assistant Manager/Store Manager 2019-2020 Joe Coffee Manhattan, New York</h5>
        <p>
        Served customers from all areas of the world in a high-paced,
        high-energy coffee shop 
        <ul>
            <li> Trained staff </li>
            <li> Ordered,
        organized, and kept track of inventory </li>
        <li> Made staff schedules</li>
        </ul>
     
      </p>

      <h3> EDUCATION </h3>

      <p>
        {" "}
        Certificate in Full Stack Web Development University of Connecticut
        <br></br>
        Stores, CT Bachelor of Arts in English Literature CUNY Hunter College
        Manhattan, NY{" "}
      </p>
    </div>
  );
}

export default Resume;
