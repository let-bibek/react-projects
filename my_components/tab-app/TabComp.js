import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { FiHeart } from "react-icons/fi";
const url = "https://course-api.com/react-tabs-project";
export default function TabComp() {
  const [loading, setLoading] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  //  const [loading, setLoading] = useState(true);
  //  const [jobs, setJobs] = useState([]);
  //  const [value, setValue] = useState(0);
 
  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading){
      return (
        <section className="center">
          <Loading />
        </section>
      );
  }
   const { company, dates, duties, title } = jobs[value];
   return (
     <section className="my-2">
       <div className="title">
         <h2 className="highlighter">Experience</h2>
       </div>
       <div className="jobs-center">
         <div className="btn-container btn-container-job">
           {jobs.map((job, index) => (
             <button
               key={index}
               className={`job-btn ${
                 index===value?"active-btn":""
               }`}
               onClick={() => setValue(index)}
             >
               {job.company}
             </button>
           ))}
         </div>
         {/* job info */}
         <article className="job-info">
           <h3>{title}</h3>
           <h4>{company}</h4>
           <p className="job-date">{dates}</p>
           {duties.map((duty, index) => {
             return (
               <div key={index} className="job-desc">
                 <FiHeart className="job-icon"></FiHeart>
                 <p>{duty}</p>
               </div>
             );
           })}
         </article>
       </div>
     </section>
   );
}
