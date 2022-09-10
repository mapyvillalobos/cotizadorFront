import { useState, useEffect } from "react";
import { Profile } from '../components';
import { myProfileWs } from "../services/user-ws"



const ProfilePage = () => {
    const [profileUser, setProfileUser] = useState([]);
    useEffect(() => {
        myProfileWs()
            .then(res => {
                setProfileUser(res.data.user)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(profileUser)
    const {imageURL, firstName, lastName, email,role} = profileUser
    return (
        <div>
                    <Profile 
                        img={imageURL}
                        name={firstName}
                        lastName={lastName} 
                        email={email} 
                        role={role}
                    />
        </div>
    )
};

export default ProfilePage;