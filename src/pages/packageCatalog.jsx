import { useState, useEffect } from "react";
import { Row, Col, Divider, Button, Typography } from 'antd';
import { PackageCard, PackageForm, QuoteForm } from '../components';
import { getAllPackagesWs } from "../services/package-ws"


const PackageCatalog = (props) => {
    const [packageCards, setPackageCards] = useState([]);
    const [isCreate, setIsCreate] = useState(false);
    const [isCreate2, setIsCreate2] = useState(false);
    const [beingCreated, setBeingCreated] = useState(false);
    
    useEffect(() => {
        getAllPackagesWs()
            .then(res => {
                setPackageCards(res.data.packages)
            })
            .catch(error => { console.log("el error", error) })
    }, [beingCreated])
   

    return (
        <div>
            <Typography.Title level={1}> Paquetes</Typography.Title>
            <Divider orientation="center"></Divider>

            <div>
                {props.user.role === "Admin" && <Button type="primary" onClick={() => setIsCreate(!isCreate)} >
                    Crear Paquete
                </Button>}


                {isCreate && <PackageForm
                    beingCreated={beingCreated}
                    setBeingCreated={setBeingCreated}
                />}
            </div>

            <div className="cards">
                <Row gutter={[40, 16]}>
            {packageCards.map(packageCard => {

                return (
                    <div >
                        <Col span={8}>

                                <PackageCard
                                    img={packageCard.ImageURL}
                                    name={packageCard.packageName}
                                    shortDescription={packageCard.packageShortDescription}
                                    cost={packageCard.packageCost}
                                    amountPeolple={packageCard.packageAmountPeople}
                                    products={packageCard._products}
                                />
                            </Col> 
                    </div> 

                );

            })}
                </Row>
                </div>
         <div>
                <Button type="primary" onClick={() => setIsCreate2(!isCreate2)}>
                    Crear cotización
                </Button>

                <br /> <br /> 

                {isCreate2 && <QuoteForm
                    beingCreated={beingCreated}
                    setBeingCreated={setBeingCreated}
                />}
         </div>
        </div>
    )
};

export default PackageCatalog;