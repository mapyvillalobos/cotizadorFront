

const UserCard = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h1>{props.firstName}</h1>
            <h2>{props.entity}</h2>
        </div>
    )
}

export default UserCard;