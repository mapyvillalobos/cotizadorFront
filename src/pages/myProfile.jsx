import { useState, useEffect } from "react";
import { Button } from "antd";
import { Profile, MyProfileEditForm } from '../components';
import { myProfileWs } from "../services/user-ws"



const ProfilePage = () => {
    const [profileUser, setProfileUser] = useState([]);
    const [isEdited, setIsEdited] = useState(false)
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
            <Button type="primary" onClick={() => setIsEdited(!isEdited)}>
                Editar
            </Button>

            {isEdited && <MyProfileEditForm />}
                    
        </div>
    )
};

export default ProfilePage;