import React from "react";
import LeftComponent2 from "./LeftComponent2";
import "./LeftContainer.css";

function LeftComponent1(props) {

  const toggleBorder = (event) => {
    document.querySelectorAll('.LeftComponent1').forEach(elem => {
        elem.style.border = "none";
    });

    event.currentTarget.style.border = "2px solid #1FC76A";


    const jobTitleElement = document.getElementById("jobTitle");
    if (jobTitleElement) {
        jobTitleElement.textContent = props.role;
    }
};
    return (
        <div className="LeftComponent1" onClick={toggleBorder}>
            <LeftComponent2 
                company={props.company}
                role={props.role}
                postDate={props.postDate}
                country={props.country}
                salary={props.salary}
                jobType={props.jobType}
                type={props.type}
                techstack={props.techstack}
                seniority={props.seniority}
                experience={props.experience}
                description={props.description}
                image={props.image}
            />
        </div>
    );
}
  
export default LeftComponent1;
