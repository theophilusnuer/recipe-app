import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";

const router = createBrowserRouter([
  {path:'/', element: <Recipes />},  //this shows that the the recipes page should show when the homepage is visited '/'
  {path:'/recipes', element: <Recipes />},
  {path:'/recipes/:id', element: <Recipe />},  //it links to any page with specific id allocated to it
]);

function App() {
  return (
    <>
   
   <Navbar />
   <RouterProvider router={router} />
    </>
  );
}

export default App;
