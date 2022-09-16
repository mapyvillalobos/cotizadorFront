import { Card, Button } from "antd";


const { Meta } = Card;

const UserCard = (props) => {
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img} />}
            >
                <Meta title={props.firstName} description={props.entity} />
        
                <h2>{props.cost}</h2>
            </Card>
        </div>
    )
}

export default UserCard;