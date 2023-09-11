import React from "react";
import "./LeftContainer.css";
import LeftCard from "./LeftCard";
import data from "../../Jobs.json";
import "../../App.css"

function LeftContainer() {
  const page = 1;


  return (
    <div className="LeftContainer">
        {data.map((job, index) => (
            <LeftCard 
                key={index}
                company={job.Company}
                role={job.Role}
                postDate={job.PostDate}
                country={job.Country}
                salary={job.Salary}
                jobType={job.JobType}
                type={job.Type}
                techstack={job.Techstack}
                seniority={job.Seniority}
                experience={job.Experience}
                description={job.Description}
                image= {job.Image}
            />
        ))}

        <div className="pageContainer"> 
          <p>Page <strong>{page}</strong> of <strong>{page}</strong></p>
        </div>
        <div className="pageContainer pageBox">
          <p className="pageNum">{page}</p>
        </div>

    </div>
  );
}

export default LeftContainer;