import { render } from "react-dom";
import { useEffect, useState } from "react";
import Search from "./Search";
import Job from "./Job";

const App = () => {
  const [jobsList, setJobsList] = useState([]);


  useEffect(() => {
    getJobs();
  }, [])

  async function getJobs() {
    const res = await fetch(
    `https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json`
    );
    const json = await res.json();
    const modifiedArray = json.map((job)=>{
      job.hidden = false;
      return job;
    })
    setJobsList(modifiedArray);
    return modifiedArray;
  }


  return (
    <>
    <header> Find a Job </header>
    <main>
      <Search  jobs={jobsList} setJobsList={setJobsList}></Search>
      {jobsList.map((job)=>(
        <Job hidden={job.hidden} key={job.id} job={job}></Job>
      ))}
    </main>
    <footer>©2021</footer>
    </>
  );
};

render(<App />, document.getElementById("root"));