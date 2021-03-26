import React, { useMemo } from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublicher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    // const heroes = getHeroeByPublisher( publisher );

    const heroes = useMemo(() => getHeroeByPublisher( publisher ), [ publisher ]);

    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 animate__animated animate__fadeIn"> 
        {
            heroes.map( hero => (
                <HeroCard 
                    key={ hero.id }
                    { ...hero }
                />
            ))
        }  
        </div>
    )
}
