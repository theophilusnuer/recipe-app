import { Alert, Box, Collapse, Container, IconButton, MenuItem, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Navbar from "../../components/navbar";

export const countries = [
    { value: 'GH', label: 'Ghana' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'BE', label: 'Benin' },
    { value: 'TG', label: 'Togo' }
];

export default function AddRecipe() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('New Recipe Added Successfully!');

    const addRecipe = async (event) => {
        // Set loading to true
        // Prevent default form submit behavior
        // Get form data
        // Post form data to the backend
        // Update message based on response status
        // Open collapsible Alert
        // Set loading to false
    }

    return (
        <>
            <Navbar />
            <Container sx={{ my: '2rem' }} maxWidth="sm">
                <h1>Add A New Recipe</h1>
                <form>
                    <TextField
                        sx={{ mb: '2rem' }}
                        fullWidth
                        name="title"
                        label="Recipe Title" />
                    <TextField
                        sx={{ mb: '2rem' }}
                        fullWidth
                        name="description"
                        label="Recipe Description"
                        multiline
                        rows={4} />
                    <TextField
                        sx={{ mb: '2rem' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="file"
                        fullWidth
                        name="image"
                        label="Recipe Image" />
                    <TextField
                        sx={{ mb: '2rem' }}
                        select
                        fullWidth
                        name="country"
                        label="Recipe Country"
                        defaultValue="GH"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box textAlign="center">
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >{message}</Alert>
                        </Collapse>

                        <LoadingButton
                            sx={{ width: '50%' }}
                            loading={loading}
                            type="submit"
                            size="large"
                            variant="contained">
                            Add New Recipe
                        </LoadingButton>
                    </Box>
                </form>
            </Container>
        </>
    );
}