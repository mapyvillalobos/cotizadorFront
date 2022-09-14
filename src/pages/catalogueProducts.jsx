import { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import { CatalogueCard } from '../components';
import { getAllCataloguesWs } from "../services/catalogue-ws"



const CatalogueProducts = () => {
    const [catalogueCards, setCatalogueCards] = useState([]);
    useEffect(() => {
        getAllCataloguesWs()
            .then(res => {
                setCatalogueCards(res.data.catalogues)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(catalogueCards)
    return (
        <div className="site-card-wrapper">
            <h1> Catálogo de productos y servicios de </h1>
            {catalogueCards.map(catalogueCard => {
                return (
                    <Row gutter={16}>
                        <Col span={8}>
                    <CatalogueCard
                        img={catalogueCard.catalogueImageURL}
                        name={catalogueCard.productName}
                        shortDescription={catalogueCard.productShortDescription}
                        cost={catalogueCard.productCost}
                    />
                        </Col>
                    </Row>
                );
            })}
        </div>
    )
};

export default CatalogueProducts;