import { useState } from "react";

const Job = (props) => {

  const job = props.job;
  // console.log("🚀 ~ file: Job.js ~ line 5 ~ Job ~ job", job)
  const company = props.job.company;
  let [maximize, setMaximize] = useState(false)
;
  function toggleMax(event){
    console.log("🚀 ~ file: Job.js ~ line 11 ~ toggleMax ~ maximize", event,maximize)
    setMaximize(!maximize);
    return
  }

  function textForButton(){
    if(maximize){
      return 'show less'
    }else{
      return 'show more'
    }
  }

  return (
    <article hidden={props.hidden} className="job">
      <h2>
        <img className="logo" crossOrigin="anonymous" src={company.logo} alt={`${company.name} logo`} />
        {job.function} <small>{job.experience}</small></h2>
      <h3>{job['employment_type']}</h3>

      <div>{company.name} <time dateTime={job['from_date']}>posted on: {job['from_date']}</time></div>

      <img className="cover" crossOrigin="anonymous" src={company.cover} alt={`${company.name} cover`}/>
      <div state={maximize ? 'max': 'min'}>
      <h4>Job Description</h4>
      <section  dangerouslySetInnerHTML={{__html: job.descr}}></section>

      <h4>Skills</h4>
      <section dangerouslySetInnerHTML={{__html: job.skills}}></section>

      <h4>Company Description</h4>
      <section dangerouslySetInnerHTML={{__html: company.descr}}></section>
      <button className="maxDescr" onClick={toggleMax}>
        {textForButton()}
      </button>
      </div>
      <a className="btn" target="_blank" href={job.urls.ad}>View Job Posting</a>
      <a className="btn" target="_blank" href={company.website}>View Company Website</a>
      <a className="btn" target="_blank" href={job.urls.apply}>Apply to Position</a>
    </article>
  );
};

export default Job;


