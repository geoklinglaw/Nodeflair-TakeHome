import React from "react";
import { useState } from 'react';
import "./LeftContainer.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TechstackBox from "./TechstackBox";

function LeftComponent2(props) {

    const textStyle = {
        flexDirection: 'column',
    }
    

    return (
        <div className="container2">
            <div className="baseContainer">
                <img alt='' className="imageStyle" src={props.image}></img>
                <div className="container1">
                    <div style={textStyle}>
                        <p className="textStyle company"> {props.company} </p>
                        <p className="textStyle jobPosition"> {props.role} </p>
                    </div>
                    <div className="buttonDesixgn">
                        <p className="textStyle buttonTextStyle"> {props.type} </p>
                    </div>
                </div>   
            </div>

            <div className="baseContainer">
                <div className="emptyBox"></div>
                <p className="container3"> {props.postDate} </p>
                <LocationOnIcon style={{color:'#838383'}}></LocationOnIcon>
                <p style={{color:'#838383'}}> {props.country} </p>
            </div>

            <div className="divider"></div>


            <div className="baseContainer">
                {
                    props.techstack.map((techstack) => (
                        <TechstackBox props={techstack} />
                    ))
                }

                <p> ... </p>


            
            </div>

        </div>

    );
  }
  
  export default LeftComponent2;