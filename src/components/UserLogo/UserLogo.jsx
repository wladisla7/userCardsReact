import './UserLogo.css'


function UserLogo(props) {
    return (
        <div className="logoStyle"><img src={props.newLogo.logo} /></div>
    )
}


export default UserLogo