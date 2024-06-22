import "./SecondNavigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SecondNavigation() {
    return (
        <>
            <div className="main-second-navigation-div">
                <div className="navigation-buttons">
                    <ul className="second-navigation-ul">
                        <li>Home <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Layouts <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Posts <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Food <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Fashion <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Archives <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Features <FontAwesomeIcon icon={['fas', 'chevron-down']} /></li>
                        <li>Contact</li>
                    </ul>
                    <div className="search-button"><FontAwesomeIcon icon={["fas", "magnifying-glass"]} /></div>
                </div>
            </div>
        </>
    )
}