import React from 'react';
import { Link } from 'react-router-dom'; 

export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <>
            <div className="card">
                <img src={`./src/assets/heroes/${ id }.jpg`} className="card-img-top" alt={ superhero }/>
                <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>
                    {
                        ( alter_ego !== characters )
                            && <p className="card-text">{ characters }</p>
                    }
                    <small className="text-muted">{ first_appearance }</small>
                </div>
                <div className="card-footer">
                    <div className="d-grid gap-2 mb-1">
                    <Link
                        className="btn block btn-primary"
                        to={ `./hero/${ id }` }
                    >Más info</Link>
                    </div>
                </div>
            </div>
        </>
        
    )
}
