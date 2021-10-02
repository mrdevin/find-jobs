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
      <header>
        <img className="logo" crossOrigin="anonymous" src={company.logo} alt={`${company.name} logo`} />

        <div className="title"><h2>
          {job.function}
        </h2>

        <h3>{job.experience} ::: {job['employment_type']}</h3>
        <small>{company.name} <time dateTime={job['from_date']}>posted on: {job['from_date']}</time></small>
        </div>
        <img className="cover" width="2286" height="821"crossOrigin="anonymous" src={company.cover} alt={`${company.name} cover`}/>
      </header>
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
      <footer>
        <a className="btn" rel="noopener" target="_blank" href={job.urls.ad}>View Job Posting</a>
        <a className="btn" rel="noopener" target="_blank" href={company.website}>View Company Website</a>
        <a className="btn" rel="noopener" target="_blank" href={job.urls.apply}>Apply to Position</a>
      </footer>
    </article>
  );
};

export default Job;


