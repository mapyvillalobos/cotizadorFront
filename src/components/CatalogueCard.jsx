import { Card, Button } from "antd";

const { Meta } = Card;

const CatalogueCard = (props) => {
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img} />}
            >
                <Meta title={props.name} description={props.shortDescription} />
            <h2>{props.cost}</h2>
            </Card>
            <Button type="primary" htmlType="submit">
                Agregar a cotización
          </Button>
        </div>
    )
}

export default CatalogueCard;