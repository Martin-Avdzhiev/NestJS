import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";
export default function Navigation() {
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

        </>
    )
}