const PackageCard = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h1>{props.name}</h1>
            <h2>{props.shortDescription}</h2>
            <h2>{props.cost}</h2>
            <h2>{props.amountPeolple}</h2>
            <h2>{props.products}</h2>
        </div>
    )
}

export default PackageCard;