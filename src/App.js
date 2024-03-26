import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./pages/recipe";
import AddRecipe from "./pages/add-recipe";
import Recipes from "./pages/recipes";


const myrouter = createBrowserRouter([
  {path:'/', element: < Recipes/>},  //this shows that the the recipes page should show when the homepage is visited '/'
  {path:'/recipes', element: <Recipes />},
  {path:'/recipes/:id', element: <Recipe />},  //it links to any page with specific id allocated to it
  {path:'add-recipe', element: <AddRecipe />}, 
]);

function App() {
  return <RouterProvider router={myrouter} />;
}

export default App;
