import { Button } from "antd";


const CatalogueCard = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h1>{props.name}</h1>
            <h2>{props.shortDescription}</h2>
            <h2>{props.cost}</h2>
            <Button type="primary" htmlType="submit">
                Agregar a cotización
          </Button>
        </div>
    )
}

export default CatalogueCard;