import "./SecondNavigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMediaQuery } from 'react-responsive';

export default function SecondNavigation() {

    const isUnder1023Width = useMediaQuery({ query: '(max-width: 1023px)' });

    return (
        <>
            {isUnder1023Width ? null :
                <div className="main-second-navigation-div">
                    <div className="navigation-buttons">
                        <ul className="second-navigation-ul">
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Home <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Layouts <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Posts <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Food <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Fashion <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Archives <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Features <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                            <li style={{ transition: "color 0.3s ease-in-out" }}>Contact</li>
                        </ul>
                        <div className="search-button"><FontAwesomeIcon style={{ transition: "color 0.3s ease-in-out" }} icon={["fas", "magnifying-glass"]} /></div>
                    </div>
                </div>
            }
        </>
    )
}