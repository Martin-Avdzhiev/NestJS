import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMediaQuery } from 'react-responsive';

import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";

import Logo from "../../../Images/voice_logo.png";

import NavigationBar from "./NavigationBar/NavigationBar";

import "./Navigation.css";


export default function Navigation() {
    const [showNavigationForMobile, setShowNavigationForMobile] = useState(false);

    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate("/");
    }

    const isUnder1023Width = useMediaQuery({ query: '(max-width: 1023px)' });

    return (
        <>
            <div className="main-navigation-div-wrapper"
               style={{
                marginLeft: showNavigationForMobile ? '260px' : '0'
              }}
            >
                {showNavigationForMobile ? <NavigationBar /> : null}
                {isUnder1023Width ?
                    <div className="main-image-wrapper"
                        style={{
                            margin: showNavigationForMobile ? "2.1357em 0" : "1em auto"
                        }}
                    >
                        <span
                            onClick={() => setShowNavigationForMobile(!showNavigationForMobile)}
                            className="navigation-button-bars">
                            <FontAwesomeIcon icon={['fas', 'bars']} 
                            />
                        </span>
                        <div className="main-image">
                            <img src={Logo} alt="voice-logo" onClick={navigateToMainPage} 
                            style={{
                                display: showNavigationForMobile ? "none" : "flex"
                            }}
                            />
                        </div>
                    </div> :
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
                                    <Link to={"/login"}>Login</Link>
                                    <Link to={"/register"}>Register</Link>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                                <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                                <FontAwesomeIcon icon={['fab', 'vk']} />
                            </div>
                        </div>
                        <div className="main-image-wrapper">
                            <div className="main-image">
                                <img src={Logo} alt="voice-logo" onClick={navigateToMainPage} />
                            </div>
                        </div>
                    </>
                }

            </div>
        </>
    )
}