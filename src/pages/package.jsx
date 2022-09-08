import { useState, useEffect } from "react";
import { EntityCard } from '../components';
import { getAllEntitiesWs } from "../services/entity-ws"



const EntityCards = () => {
    const [entityCards, setEntityCards] = useState([]);
    useEffect (() => {
        getAllEntitiesWs()
        .then(res => {
            setEntityCards(res.data.entities)
        })
        .catch(error => {console.log ("el error", error)})
    },[])
    console.log(entityCards)
    return (
        <div>
            {entityCards.map(entityCard => {
                return (
                    <EntityCard name={entityCard.entityName} img={entityCard.entityImageURL} />
                );
            })}
        </div>
    )
};

export default EntityCards;