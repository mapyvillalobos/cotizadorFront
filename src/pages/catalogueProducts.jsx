import { useState, useEffect } from "react";
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
        <div>
            <h1> Catálogo de productos y servicios de </h1>
            {catalogueCards.map(catalogueCard => {
                return (
                    <CatalogueCard
                        img={catalogueCard.catalogueImageURL}
                        name={catalogueCard.productName}
                        shortDescription={catalogueCard.productShortDescription}
                        cost={catalogueCard.productCost}
                    />
                );
            })}
        </div>
    )
};

export default CatalogueProducts;