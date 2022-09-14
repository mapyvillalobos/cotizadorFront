import { useState, useEffect } from "react";
import { Row, Col } from 'antd';
import { PackageCard } from '../components';
import { getAllPackagesWs } from "../services/package-ws"


const PackageCatalog = () => {
    const [packageCards, setPackageCards] = useState([]);
    useEffect(() => {
        getAllPackagesWs()
            .then(res => {
                setPackageCards(res.data.packages)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(packageCards)
    return (
        <div>
            <h1>Paquetes</h1>
            {packageCards.map(packageCard => {
                
                return (
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                    <PackageCard 
                    img={packageCard.ImageURL}
                    name={packageCard.packageName}      
                    shortDescription={packageCard.packageShortDescription}
                    cost={packageCard.packageCost}
                    amountPeolple={packageCard.packageAmountPeople}
                    products= {packageCard._products}
                    />
                            </Col>
                        </Row>
                    </div>
                );
                
            })}
        </div>
    )
};

export default PackageCatalog;