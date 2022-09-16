import { useState, useEffect } from "react";
import { Row, Col, Divider, Button, Typography } from 'antd';
import { CatalogueCard, ProductForm } from '../components';
import { getAllEntitiesWs } from "../services/entity-ws";
import { getAllCataloguesWs } from "../services/catalogue-ws"
import { signupWs } from "../services/auth-ws";

const CatalogueProducts = (props) => {
    const [catalogueCards, setCatalogueCards] = useState([]);
    const [entityInfo, setEntityInfo] = useState([])
    const [selectedEntity, setSelectedEntity] = useState([]);
    const [isCreate, setIsCreate] = useState(false);
    const [beingCreated, setBeingCreated] = useState(false);
    useEffect(() => {
        getAllCataloguesWs()
            .then(res => {
                setCatalogueCards(res.data.catalogues)
            })
            .catch(error => { console.log("el error", error) })
    }, [beingCreated])

    useEffect(() => {
        getAllEntitiesWs()
            .then(res => {
                console.log(res.data)
                setEntityInfo(res.data.entities)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(entityInfo)

    const onFinish = (values) => {
        console.log(values)
        signupWs({ ...values, _entities: selectedEntity })
            .then(response => (console.log(response)))
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };


    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setSelectedEntity(checkedValues)
    };

    return (
        <div>
            <div >
                <Typography.Title level={1}> Catálogo de productos y servicios</Typography.Title>
                <Divider orientation="center"></Divider>
               
                {props.user.role === "Admin" && <Button type="primary" onClick={() => setIsCreate(!isCreate)} >
                    Crear producto o servicio
                </Button>}

                {isCreate && <ProductForm
                    beingCreated={beingCreated}
                    setBeingCreated={setBeingCreated}
                />}
                    
            </div>
            
            <div className="cards">
                <Row gutter={[40, 16]}>
                    {catalogueCards.map(catalogueCard => {
                        return (
                            <Col span={8}>
                                <CatalogueCard
                                    img={catalogueCard.catalogueImageURL}
                                    name={catalogueCard.productName}
                                    shortDescription={catalogueCard.productShortDescription}
                                    cost={catalogueCard.productCost}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    )
};

export default CatalogueProducts;