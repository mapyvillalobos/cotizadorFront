import { Button } from "antd";


const Profile = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h1>{props.name}</h1>
            <h2>{props.lastName}</h2>
            <h2>{props.email}</h2>
            <h2>{props.role}</h2>
            {/* <Button type="primary" htmlType="submit">
                Reset Contraseña
            </Button> */}

            <Button type="primary" htmlType="submit">
                Editar
            </Button>
        </div>
    )
}

export default Profile;