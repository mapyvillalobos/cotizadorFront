import { useState, useEffect } from "react";
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
            <h1>Catálogo</h1>
            {packageCards.map(packageCard => {
                return (
            
                    <PackageCard 
                    img={packageCard.ImageURL}
                    name={packageCard.packageName}      
                    shortDescription={packageCard.packageShortDescription}
                    cost={packageCard.packageCost}
                    amountPeolple={packageCard.packageAmountPeople}
                    products= {packageCard._products}
                    />
                );
            })}
        </div>
    )
};

export default PackageCatalog;