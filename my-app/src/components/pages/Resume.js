import React from "react";
import "../../App.css";

const styles = {
    general: {
        width: '80%',
        padding: '60px',
        border: 'double 5px',
        margin: '30px',
    },
}

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
        PawsPlus+, More for our Furry Friends | /molyneauxk93/PawsPlus- |
        /molyneauxk93.github.io/PawsPlus- Summary: Petfinder app that allows
        users to search and favorite local pets Role: Utilized and applied
        Petfinder API Tools: HTML, CSS, JavaScript, Bootstrap
      </p>
      <p>
        DayTryppers | /Cashew1337/Travel-Planner Summary: Travel Planner app
        that allows user to select itineraries for different travel destinations
        and connect with other users via the platform Role: Database management,
        front end designer Tools: Express Handlebars, CSS, JavaScript, MERN,
        REST, Bootstrap,{" "}
      </p>

      <p>
        Tech-Blog | /isaacsto/Tech-Blog | Summary: Full stack social media site
        that allows users to login, post and delete thoughts as well as comment
        on others thoughts Role: Sole Author Tools: Express Handlebars, CSS,
        JavaScript, MERN, REST
      </p>

      <h4>EXPERIENCE</h4>
      <p>
        {" "}
        Barista 2021-Present Starbucks Coffee Newtown, CT Developed a report
        with customers, ensured they received quality beverages in a timely
        manner, worked with my coworkers to optimize procedures in order to
        ensure best possible customer experience Co-created a welcoming
        environment Collaborated with other Starbucks Partners to run a smooth
        shift-play Helped educate and develop newer barista’s skills{" "}
      </p>

      <p>
        {" "}
        Assistant Manager/Store Manager 2019-2020 Joe Coffee Manhattan, New York
        Served customers from all areas of the world in a high-paced,
        high-energy coffee shop Key Accomplishments: Trained staff Ordered,
        organized, and kept track of inventory Made staff schedules
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
