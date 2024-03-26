import { useParams } from "react-router-dom";
import useSWR from "swr";
import loadingIcon from '../../assets/images/infinite-spinner.svg';
import { Container } from "@mui/material";
import Navbar from "../../components/navbar";


const getRecipe = (...args) => {

    //prepare URL
    const url = new URL(args[0]);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    //fetch and retuen recipe
    return fetch(url).then(response => response.json());
}

export default function Recipe() {

    const { id } = useParams();
    const { data, isLoading } = useSWR(`${process.env.REACT_APP_RECIPE_API_URL}/recipes/${id}`, getRecipe);
    // console.log(data,isLoading);
    return (
        <>
            <Navbar />
            {isLoading ? (<img src={loadingIcon} alt='' />) : (
                <Container>
                    <h1>{data.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.summary }} />
                    <img src={data.image} alt={data.title} />
                </Container>
            )}
        </>
    );
}