import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import JoblyApi from "../Api/Api";
import JobCard from "./JobCard";


const JobList = () => {

    const [jobs, setJobs] = useState([]);

    const handleSearch = async (title) => {
        try {
            const jobs = await JoblyApi.getJobs(title);

            const uniqueJobs = jobs.filter((job, index, self) => 
                index === self.findIndex(j => j.id === job.id)
            );
            console.log("Jobs from API:", uniqueJobs);
            setJobs(uniqueJobs);
        } catch (error) {
            console.error("Error fetching jobs:" ,error);           
        }
    };

    useEffect(() => {
        handleSearch();
    },[]);


    if(!jobs) return <p>Loading...</p>

    return(
        <div>
            <SearchBar onSearch={handleSearch} />
            {jobs.length ? (
                jobs.map(job => (
                    <JobCard key={job.id} job={job} />  
                ))
            ) : (
                <p>Sorry, no results were found!</p>
            )}
        </div>
    )
}

export default JobList;