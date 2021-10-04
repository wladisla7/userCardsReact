
import facebook from './facebook.png';
import twitter from './twitter.png';
import gplus from './gplus.png';
import linkedin from './linkedin.png'


const socialLogoArr = { facebook: facebook, twitter: twitter, gplus, linkedin };


function SocialLogo(props) {


    const socialList = props.socialList

    const iconJSX = socialList.map(
        (social) => {
            return <span className="socialMediaIcon"><img src={socialLogoArr[social.socialName]} alt={social.socialName}></img></span>
        }
    )

    return (

        <div className="logoContacts">
            <div>{iconJSX}</div>
        </div>

    )
}


export default SocialLogo