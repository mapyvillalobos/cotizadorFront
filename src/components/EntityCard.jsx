import { getAllEntitiesWs } from "../services/entity-ws"

const EntityCard = (props) => {
    return (
        <div>
            <img src = {props.img}/>
            <h1>{props.name}</h1>
        </div>
    )
}

export default EntityCard;