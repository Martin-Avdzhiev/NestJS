import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationLink({name} : {name:string}){
    return(
        <div className="navigation-bar-link">
        <p
            className="red-text-animation"
            style={{
                transition: "color 0.3s ease-in-out",
            }}
        >{name}</p>
        <FontAwesomeIcon icon={['fas', 'chevron-down']} />
    </div>
    )
}