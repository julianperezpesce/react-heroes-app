import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search ); //para que no me de error q es igual a string vacio
    // console.log( q );

    


    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    // const heroesFiltered = getHeroesByName( searchText ); //Lo simplifico con useMemo
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);

        reset();
    }

    return (
        <div>
            <h1>Search Scree</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Form</h4>
                    <hr/>
                    <form 
                        onSubmit={ handleSearch }
                    >
                        <input 
                            type="text"
                            placeholder="Search"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-block m-1"
                        >Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    { 
                        ( q === '')
                            && 
                            <div className="alert alert-info">
                            Search a Hero
                            </div>
                    }

                    { 
                        ( q !== '' && heroesFiltered.length === 0)
                            && 
                            <div className="alert alert-danger">
                            The hero doesn't exist
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            /> 
                        ))   
                    }

                </div>
            </div>
        </div>
    )
}
