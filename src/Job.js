
const Job = (props) => {

  const job = props.job;
  console.log("🚀 ~ file: Job.js ~ line 5 ~ Job ~ job", job)
  const company = props.job.company;
  return (
    <article>
      <h2>{job.function} <small>{job['employment_type']} {job.experience}</small>{}</h2>

      <h3>{company.name} <time datetime={job['from_date']}>{job['from_date']}</time></h3>
      <img src={company.logo.substr(6,company.logo.length)} alt="logo"/>

      <img src={company.cover.substr(6,company.cover.length)} alt="cover"/>

      <section dangerouslySetInnerHTML={{__html: company.descr}}>

      </section>
      <a className="btn" target="_blank" href={job.urls.ad}>view job &#x1f517;</a>
      <a className="btn" target="_blank" href={company.website}>Company Website &#x1f517;</a>
      <a className="btn" target="_blank" href={job.urls.apply}>Apply &#x1f517;</a>

    </article>
  );
};

export default Job;


