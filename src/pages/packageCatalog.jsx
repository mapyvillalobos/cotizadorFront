import { useState, useEffect } from "react";
import { Row, Col, Layout, Divider, Cascader, Button } from 'antd';
import { PackageCard, PackageForm, QuoteForm } from '../components';
import { getAllPackagesWs } from "../services/package-ws"

const { Content } = Layout;


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
    console.log(packageCards)
    return (
        <div>
            <Divider orientation="center">Paquetes <br></br>

            </Divider>

            <div>
                {props.user.role === "Admin" && <Button type="primary" onClick={() => setIsCreate(!isCreate)} >
                    Crear Paquete
                </Button>}


                {isCreate && <PackageForm
                    beingCreated={beingCreated}
                    setBeingCreated={setBeingCreated}
                
                />}
            </div>
            {packageCards.map(packageCard => {

                return (
                    <div >
                        <Row gutter={16}>
                            <Col className="gutter-row" span={8}>

                                <PackageCard
                                    img={packageCard.ImageURL}
                                    name={packageCard.packageName}
                                    shortDescription={packageCard.packageShortDescription}
                                    cost={packageCard.packageCost}
                                    amountPeolple={packageCard.packageAmountPeople}
                                    products={packageCard._products}
                                />
                            </Col>
                        </Row>
                        <Button type="primary" onClick={() => setIsCreate2(!isCreate2)}>
                            Crear cotización
                        </Button>

                        {isCreate2 && <QuoteForm
                            beingCreated={beingCreated}
                            setBeingCreated={setBeingCreated}
                        />}

                    </div>

                );

            })}
        </div>
    )
};

export default PackageCatalog;