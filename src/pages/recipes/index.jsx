import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";

export default function Recipes() {
    return (
        <Container sx={{ my: '2rem' }} maxWidth='sm'>

            <TextField fullWidth
                id="outlined-basic"
                label="Enter a keyboard to search recipes and hit enter"
                variant="outlined" />

            <Grid sx={{mt:'0.5rem'}} container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia 
                        sx={{height: 140}}
                        image="https://images.unsplash.com/photo-1708601420990-36d3b092f07f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Card>

                    <CardContent>
                        <Typography variant="h5">Recipe Name</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    );

}