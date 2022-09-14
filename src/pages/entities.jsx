import { useState, useEffect } from "react";
import { Row, Col } from 'antd';
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
        <div className="site-card-wrapper">
            {entityCards.map(entityCard => {
                return (
                    <Row gutter={16}>
                        <Col span={8}>
                    <EntityCard name={entityCard.entityName} img={entityCard.entityImageURL} />
                        </Col>
                    </Row>
                );
            })}
        </div>
    )
};

export default EntityCards;