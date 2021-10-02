import { useState,useEffect } from "react";
import Select from 'react-select'

const Search = (props) => {
  const allJobs = props.jobs;
  let [keywords, setKeywords] = useState([]);
  let [tags, setTags] = useState([]);

  useEffect(() => {
    allJobs.forEach((job)=>{

      // splitStringAddKeyWords(job.descr, job.id);
      splitStringAddKeyWords(job.skills, job.id);
      splitStringAddKeyWords(job.function, job.id);
      splitStringAddKeyWords(job['employment_type'], job.id);
      splitStringAddKeyWords(job.experience, job.id);
    })
    // console.log("🚀 ~ file: Search.js ~ line 9 ~ allJobs.forEach ~ keywords", keywords)

    setKeywords(keywords.slice());
    let newTags = keywords.map((item)=>{
      return {value: item.refIds, label: item.word}
    });

    setTags(newTags);



  }, [allJobs])

  function handleFilterUpdated(arrayVal, actionType){
    console.log("🚀 ~ file: Search.js ~ line 32 ~ handleFilterUpdated ~ arrayVal, actionType", arrayVal, actionType)
    // return;
    let tempJobs = props.jobs.slice();
    let jobIds = [];
    arrayVal.forEach((selectedWord)=>{
      if(jobIds.length > 0){
        jobIds = jobIds.filter(x => selectedWord.value.includes(x))
      }else{
        jobIds = [...jobIds, ...selectedWord.value]
      }
    });
    console.log("🚀 ~ file: Search.js ~ line 36 ~ handleFilterUpdated ~ jobIds", jobIds)

    if(arrayVal.length >= 1){
      tempJobs.forEach((job, idx)=>{
        if(jobIds.includes(job.id)){
          tempJobs[idx].hidden = false;
        }else{
          tempJobs[idx].hidden = true;
        }
      });
    }else{
      tempJobs.forEach((job, idx)=>{
          tempJobs[idx].hidden = false;
      });
    }

    props.setJobsList(tempJobs);
  }

  function splitStringAddKeyWords(string, refId){
    const sanatizedString = removeHtmlTags(string);
    const commonWord = ['the', 'and', 'then', 'that', 'because', 'okay', 'but', 'your', 'some', 'done', 'will', 'across', 'with', 'teams', 'they', 'them', 'work', 'time', 'over', 'have', 'couple', 'working', 'years', 'good', 'from', 'such', 'used', 'right', 'you'];

    const wordsFromStr = sanatizedString.split(/[\s,\!,\.,\?,\(,\),\,,\:,\;,\/]/);
    console.log("🚀 ~ file: Search.js ~ line 29 ~ splitStringAddKeyWords ~ wordsFromStr", wordsFromStr)

    wordsFromStr.forEach((word)=>{
      let tempWord = word.trim().toLowerCase();
      // console.log("🚀 ~ file: Search.js ~ line 33 ~ wordsFromStr.forEach ~ word", tempWord)
      if(commonWord.includes(tempWord) || word.length <= 2){return};
      let placeInArray = keywords.findIndex((item) => item.word === tempWord);
      if(placeInArray !== -1){

        const refIdExsits = keywords[placeInArray].refIds.includes(refId);
        if(!refIdExsits){
          keywords[placeInArray].refIds.push(refId)
        }
      }else{
        keywords.push({
          word: tempWord,
          refIds: [refId]
        })
      }

    });
  }

  function removeHtmlTags(string){
    return string.replace(/<\/?[\w\s="/.':;#-\/\?]+>/gi, '').replace(/\n/gi, '');
  }


  return (
    <div className="search">
      <Select isMulti onChange={handleFilterUpdated} placeholder="Filter Jobs" options={tags}/>
    </div>
  );
};

export default Search;