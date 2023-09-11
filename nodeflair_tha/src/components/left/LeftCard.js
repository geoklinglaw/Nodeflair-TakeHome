import React from "react";
import LeftComponent1 from "./LeftComponent1";
// import styled from 'styled-components'


function LeftCard(props) {
    const divStyle = {
        borderRadius: '8px',
        lineHeight: '1.5',
        padding: '5px',
        
    }

    return (
        <div style={divStyle} className="LeftCard">
            <LeftComponent1 
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
                image= {props.image}
            />

        </div>
    );
}

export default LeftCard;

