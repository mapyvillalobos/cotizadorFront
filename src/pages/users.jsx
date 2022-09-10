import { useState, useEffect } from "react";
import { UserCard } from '../components';
import { usersWs } from "../services/user-ws"



const AllUsers = () => {
    const [userCards, setUserCards] = useState([]);
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
        <div>
            <h1> Vendedores </h1>
            {userCards.map(userCard => {
                return (
                    <UserCard
                        img={userCard.imageURL}
                        firstName={userCard.firstName}
                        //entity={userCard._entity}
                    />
                );
            })}
        </div>
    )
};

export default AllUsers;