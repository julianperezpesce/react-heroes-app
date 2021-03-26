import React, { useMemo } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroesScreen = ({ history }) => {

    // Sin destructurar
    // const params = useParams();

    // Destructurar
    const { heroeId } = useParams();
    // console.log(`ID: "${ heroeId }"`);
    // const hero = getHeroeById( heroeId ); Lo REEMPLAZO POR useMemo

    const hero = useMemo(() => getHeroeById( heroeId ), [ heroeId ]);
    console.log(hero);

    if ( !hero ) {
        return <Redirect to={ '/' } />;
    }

    const handleReturn = () => {
        if( history.length < 0) {

            history.push('/');
        } else {

            history.goBack();
        }
    }
    

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <div className="list-group">
                <img 
                    className="img-thumbnail animate__animated animate__fadeIn"
                    src={`../src/assets/heroes/${ heroeId }.jpg`}
                    alt={ superhero }/>
                </div>                
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: { alter_ego }</b>
                    </li>
                    <li className="list-group-item"><b>Publisher: { publisher }</b>
                    </li>
                    <li className="list-group-item"><b>First Appearance: { first_appearance }</b>
                    </li>
                </ul>

                <br/><br/><br/>
                <h5> Characters </h5>
                <p>{ characters }</p>

                <br/>
                
                <button 
                    className="btn btn-primary ms-auto"
                    onClick={ handleReturn }
                    >Regresar</button>
            </div>
        </div>
    )
}
// src\assets\heroes