import { Card } from "antd";

const { Meta } = Card;

const UserCard = (props) => {
    return (
        <div className="cards">
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img} />}
            >
                <Meta title={props.firstName} /> <br/>
                <span>{props.email}</span>
        
            </Card>
        </div>
    )
}

export default UserCard;