import { useState, useEffect } from "react";
import { Row, Col, Divider, Button } from 'antd';
import { EntityCard, EntityForm } from '../components';
import { getAllEntitiesWs } from "../services/entity-ws"



const EntityCards = (props) => {
    const [entityCards, setEntityCards] = useState([]);
    const [isCreate, setIsCreate] = useState(false);
    const [beingCreated, setBeingCreated] = useState(false);

    useEffect (() => {
        getAllEntitiesWs()
        .then(res => {
            setEntityCards(res.data.entities)
        })
        .catch(error => {console.log ("el error", error)})
    }, [beingCreated])

    return (
        <div className="site-card-wrapper">
            <Divider orientation="center">Entidades</Divider>
            {entityCards.map(entityCard => {
                return (
                    <Row gutter={16}>
                        <Col span={8}>
                    <EntityCard name={entityCard.entityName} img={entityCard.entityImageURL} />
                        </Col>
                    </Row>
                );
            })}
            <div>
                {props.user.role === "Admin" && <Button type="primary" onClick={() => setIsCreate(!isCreate)} >
                    Crear entidad
                </Button>}


                {isCreate && <EntityForm 
                    beingCreated = {beingCreated}
                    setBeingCreated= {setBeingCreated} 
                />}
            </div>
        </div>
    )
};

export default EntityCards;