import { Card, Button} from 'antd';

const { Meta } = Card;



const PackageCard = (props) => {
    return (
        <div >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img} />}
            >
                        <Meta title={props.name} description={props.shortDescription}/>
            
            <h2>{props.cost}</h2>
            <h2>{props.amountPeolple}</h2>
            <h2>{props.products}</h2>
        </Card>
            <Button type="primary" htmlType="submit">
                Crear cotización
            </Button>
            
        </div>
    )
}

export default PackageCard;