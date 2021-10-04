import './UserCard.css'
import logo from "../UserLogo/logo.png"
import UserLogo from '../UserLogo/UserLogo.jsx';
import SocialLogo from '../../logoImages';






function UserCard(props) {

    const { firstname, lastname, userDescription, socialMedia } = props.userData

    const imageLogo = { logo }

    return (
        <div >
            <div className="UserCard">
                <div className="UPofCard">

                    <UserLogo newLogo={imageLogo} />

                    <h4 className="UserName">{firstname} {lastname}</h4>

                </div>
                <div className="DOWNofCard">
                    <p className="userDescription">{userDescription}</p>
                    <div className="contacts">
                        <div className="buttonsContacts">

                            <div className="Massage">Massage</div>
                            <div className="Following">Follwing</div>

                        </div>

                        <SocialLogo socialList={socialMedia} />

                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserCard