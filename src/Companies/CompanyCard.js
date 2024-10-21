import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import "./CompanyCard.css";


const CompanyCard = ({ handle, name, description, logoUrl }) => {
    
    return(
        <div className="card-container">
            <Card>
                <Link to={`/companies/${handle}`} className='link'>
                    <h5> { name } </h5>
                    <p> { description } </p>
                    {logoUrl && <img src={ logoUrl } alt={ name } />}
                </Link>
            </Card>
        </div>
    )
}

export default CompanyCard;