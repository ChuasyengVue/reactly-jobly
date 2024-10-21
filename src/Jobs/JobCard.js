import React, { useContext, useState} from "react";
import { Card } from 'reactstrap';
import { UserContext } from "../Auth/UserContext";
import './JobCard.css';

const JobCard = ({ job }) => {

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState(hasAppliedToJob(job.id));



    const handleApply = async (evt) => {
        if(applied) return;
        await applyToJob(job.id);
        setApplied(true);
    };

    return(
        <div className="card-container">
            <Card>
                <div>
                    <h4> { job.title } </h4>
                    <p> { job.companyHandle } </p>
                    {job.salary && <div><p>Salary: {formatSalary(job.salary)}</p></div>}
                    <p> Equity: {job.equity } </p>
                    <button
                    onClick={handleApply}
                    disabled={applied}>
                        {applied ? "Applied" : "Apply"}
                    </button>
                </div>
            </Card>
        </div>
    )
}

function formatSalary(salary) {
    const digits = [];
    const salaryStr = salary.toString();

    for(let i = salaryStr.length - 1; i >= 0; i--) {
        digits.push(salaryStr[i]);
        if(i > 0 && i % 3 === 0) digits.push(",");
    }
    return digits.reverse().join("");
}

export default JobCard;