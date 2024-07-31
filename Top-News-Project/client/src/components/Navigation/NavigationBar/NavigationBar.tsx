import "./NavigationBar.css";
import NavigationLink from "./NavigationLink";

export default function NavigationBar() {
    return (
        <>
            <div className="navigation-bar-container">
                <NavigationLink name="Home"/>
                <NavigationLink name="Layouts"/>
                <NavigationLink name="Posts"/>
                <NavigationLink name="Food"/>
                <NavigationLink name="Fashion"/>
                <NavigationLink name="Archives"/>
                <NavigationLink name="Features"/>
                <NavigationLink name="Contact"/>
                <NavigationLink name="More"/>
            </div>
        </>
    )
}