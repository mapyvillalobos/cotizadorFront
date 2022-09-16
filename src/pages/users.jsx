import { useState, useEffect } from "react";
import { UserCard, UserForm } from '../components';
import { usersWs } from "../services/user-ws"
import {
    Button,
    Row, 
    Col,
    Divider
} from 'antd';



const AllUsers = (props) => {
    const [userCards, setUserCards] = useState([]);
    const [isCreate, setIsCreate] = useState(false)
    useEffect(() => {
        usersWs()
            .then(res => {
                console.log(res)
                setUserCards(res.data.users)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(userCards)
    return (
        <div className="site-card-wrapper">
            <Divider orientation="center">Vendedores</Divider>
            {userCards.map(userCard => {
                return (
                    <Row gutter={16}>
                        <Col span={8}>
                    <UserCard
                        img={userCard.imageURL}
                        firstName={userCard.firstName}
                        entity={userCard._entities}
                    />
                        </Col>
                    </Row>
                );
            })}

            {props.user.role === "Admin" && <Button type="primary" onClick={() => setIsCreate(!isCreate)} >
                Crear vendedor
            </Button> }
            

            {isCreate && <UserForm /> }
             
            
      
        </div>
    )
};

export default AllUsers;