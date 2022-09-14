import { Card, Button } from "antd";

const { Meta } = Card;

const EntityCard = (props) => {
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img} />}
            >
                <Meta title={props.name} />
            </Card>
            <Button type="primary" htmlType="submit">
                Editar
            </Button>
        </div>
    )
}

export default EntityCard;