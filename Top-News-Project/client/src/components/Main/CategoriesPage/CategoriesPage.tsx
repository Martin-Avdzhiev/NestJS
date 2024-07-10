import { useParams } from "react-router-dom";
import "./CategoriesPage.css";

export default function CategoriesPage(){
    const {category} = useParams();

    return(
        <>
        <div>{category}</div>
        </>
    )
}