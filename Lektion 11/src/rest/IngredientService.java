package rest;

import dto.Ingredient;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("ingredient")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class IngredientService {
	private static Map<Integer, Ingredient> ingredients = new HashMap<>();
	//Insert some dummy data
	static {
		ingredients.put(1, new Ingredient(1, "flormelis", 60.0));
		ingredients.put(2, new Ingredient(2, "mel", 240.0));
		ingredients.put(3, new Ingredient(3, "smør", 185.0));
	} 
    
    @GET
    public List<Ingredient> getIngredientList() {
        return new ArrayList<>(ingredients.values());
    }

    @GET
    @Path("{id}")
    /*Eksempel på HTTP kald: GET localhost:8080/Lektion11/rest/ingredient/3 */
    public Ingredient getIngredient(@PathParam("id") int id) {
        return ingredients.get(id);
    }

    @POST
    /*Variablen ingredient genereres af Jackson fra JSON-strengen i HTTP body'en*/
    public Ingredient addIngredient(Ingredient ingredient) {
        ingredients.put(ingredient.getId(), ingredient);
        return ingredient;
    }

    @DELETE
    @Path("{id}")
    /*Eksempel på HTTP kald: DELETE localhost:8080/Lektion11/rest/ingredient/3 */
    public void deleteIngredient(@PathParam("id") int id) {
        ingredients.remove(id);
    }
}
