import { Card } from "antd";

const { Meta } = Card;

const CatalogueCard = (props) => {
    return (
        <div className="cards">
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img} />}
            > 
                <Meta title={props.name} description={props.shortDescription}/>
                <br/>
            <span>${props.cost}</span>
            </Card>
            <div>
                
            </div>
        </div>
    )
}

export default CatalogueCard;