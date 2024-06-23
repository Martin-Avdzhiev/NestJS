import FooterContent from "./FooterContent/FooterContent";

import "./Footer.css";

export default function Footer() {
    return (
        <>
            <div className="footer-container-wrapper">
                <div className="footer-container">
                        <FooterContent />
                    <div className="footer-down-container">
                        <div className="footer-copyright">
                            <p>Copyright &copy; 2024. Created by Martin. The desing is from <a target="_blank" href="https://preview.themeforest.net/item/voice-clean-newsmagazine-wordpress-theme/full_screen_preview/9646105">here</a>.</p>
                        </div>
                        <div className="footer-navigation">
                            <ul>
                                <li>Typography</li>
                                <li>Layouts</li>
                                <li>Shortcodes</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}