import React, { useEffect, useState } from "react";
import "../css/JobCard.css";

const JobCard = () => {
  const [value, setValue] = useState([]);

  const fetchData = () => {
    return fetch("https://jobs-api.squareboat.info/api/v1/jobs")
      .then((res) => res.json())
      .then((data) => setValue(data.data))
      .catch((err) => {
        console.log("Something went wrong!!!");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card_job">
      {value.map((data) => (
        <div className="jobCard">
          <p className="jobCard__title">{data.title}</p>
          <p className="jobCard__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="jobCard__location">{data.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
