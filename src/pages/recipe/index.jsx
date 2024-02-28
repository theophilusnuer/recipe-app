import { useParams } from "react-router-dom";


export default function Recipe() {

    const { id } = useParams();


    return (

        <h1>Recipe Page: {id}</h1>
    );
}