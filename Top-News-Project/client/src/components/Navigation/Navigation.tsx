import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

import "./Navigation.css";

import Logo from "../../../Images/voice_logo.png";


export default function Navigation() {
    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate("/");
    }
    return (
        <>
            <div className="main-navigation-div">
                <div className="pages">
                    <ul>
                        <li>Layouts</li>
                        <li>Typography</li>
                        <li>Contact</li>
                        <li>Forum</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="socials">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                    <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                    <FontAwesomeIcon icon={['fab', 'vk']} />
                </div>
            </div>
            <div className="main-image-wrapper">
            <div className="main-image">
                <img src={Logo} alt="voice-logo" onClick={navigateToMainPage}/>
            </div>
            </div>

        </>
    )
}