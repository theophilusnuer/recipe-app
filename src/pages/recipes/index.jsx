import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography, CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import emptyIcon from '../../assets/images/undraw_page_not_found_re_e9o6.svg';
import loadingIcon from '../../assets/images/infinite-spinner.svg';
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);

    const getRecipes = () => {
        setLoading(true);
            //prepare URL
            const url = new URL (`${process.env.REACT_APP_RECIPE_API_URL}/recipes`);
            
        // fetch recipes from API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //update the recipes state
                setRecipes(data);
                
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => setLoading(false))

    }
useEffect(getRecipes, [keyword])
    return (
       <>
        <Navbar/>
        <Container sx={{ my: '1rem' }}>

            <TextField fullWidth
                id="outlined-basic"
                label="Enter a keyboard to search recipes and hit enter"
                variant="outlined" 
                onKeyDown={event => event.key === 'Enter' && setKeyword(event.target.value)}
                />

            <Grid sx={{ mt: '0.5rem', justifyContent:'center' }} container spacing={3}>
              { loading ? <img src={loadingIcon} width='50%'alt='' /> : recipes.length > 0 ? recipes.map(recipe => ( <Grid key={recipe._id} item xs={4}>
                    <Card sx={{ maxWidth: 345, height: '100%' }}>
                        <CardActionArea sx={{height: '100%'}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={recipe.image}
                                alt={recipe.title}
                            />
                            <CardContent sx={{height: '100%'}}>
                               <Link to={`/recipes/${recipe._id}`}>
                               <Typography gutterBottom variant="h5" component="div">
                                    {recipe.title}
                                </Typography>

                               </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>)) : <img src={emptyIcon} width='50%' height='50%' alt='nothing found'/>}
            </Grid>
        </Container>
       </>
    );

}