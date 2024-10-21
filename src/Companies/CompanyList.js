import React, { useState, useEffect } from "react";
import JoblyApi from '../Api/Api';
import SearchBar from "../SearchBar/SearchBar";
import CompanyCard from "./CompanyCard";


const CompanyList = () => {

    const[companies, setCompanies] = useState([]);

    useEffect(() => {
        handleSearch();
    },[]);

    async function handleSearch(name) {
        try {
            let companies = await JoblyApi.getCompanies(name);
            setCompanies(companies);
        } catch (error) {
            console.error("Error Loading:", error);
        }
    }

    return(
        <div>

            <SearchBar onSearch={handleSearch} />

            {companies.length ? (
                <div> 
                    {companies.map(company => (
                        <CompanyCard
                        key={company.handle}
                        handle={company.handle}
                        name={company.name}
                        description={company.description}
                        logoUrl={company.logoUrl}
                        />
                    ))}
                </div>
            ): (
                <p>Sorry, no results were found!</p>
            )}

        </div>
    )
}

export default CompanyList;