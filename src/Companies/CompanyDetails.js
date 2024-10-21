import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "../Api/Api";
import JobCard from "../Jobs/JobCard";


const CompanyDetail = () => {
    
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function fetchCompany() {
            try {
                let companyDetails = await JoblyApi.getCompany(handle);
                setCompany(companyDetails);
            } catch (error) {
             console.error("Error fetching company details:", error);   
            }
        }
        fetchCompany();
    },[handle]);

    if(!company) return <p>Loading...</p>

    return(
        <div>
            <h4> { company.name } </h4>
            <p> { company.description } </p>
            {company.jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    )
}

export default CompanyDetail;