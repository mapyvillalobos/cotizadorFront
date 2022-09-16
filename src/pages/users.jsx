import { useState, useEffect } from "react";
import { UserCard, UserForm } from '../components';
import { usersWs } from "../services/user-ws"
import {
    Button,
    Row, 
    Col,
    Divider,
    Typography
} from 'antd';



const AllUsers = (props) => {
    const [userCards, setUserCards] = useState([]);
    const [isCreate, setIsCreate] = useState(false);
    const [beingCreated, setBeingCreated] = useState(false);
    
    useEffect(() => {
        usersWs()
            .then(res => {
                console.log(res)
                setUserCards(res.data.users)
            })
            .catch(error => { console.log("el error", error) })
    }, [beingCreated])

    return (
        <div>

            <div >
                <Typography.Title level={1}> Vendedores</Typography.Title>
                <Divider orientation="center"></Divider>

                {props.user.role === "Admin" && <Button type="primary" onClick={() => setIsCreate(!isCreate)} >
                    Crear vendedor
                </Button>}

                {isCreate && <UserForm
                    beingCreated={beingCreated}
                    setBeingCreated={setBeingCreated}
                />}

            </div>

            <div className="cards">
                <Row gutter={[40, 16]}>
            {userCards.map(userCard => {
                return (
                        <Col span={8}>
                        <UserCard
                        img={userCard.imageURL}
                        firstName={userCard.firstName}
                    />
                        </Col>
                );
            })}
                </Row>
            </div>
        </div>
    )
};

export default AllUsers;