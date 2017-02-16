package rest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import dto.UserPass;

@Path("password")
public class PasswordService {
	@Context
	UriInfo uriInfo;
	@Context
	HttpHeaders headers;
	@Context
	HttpServletRequest request;

	@Path("status")
	@GET
	public String testLoginStatus(){
		System.out.println(getSession());
		return (getSession().getAttribute("user")==null)? "Bruger ikke logget ind":"Bruger " +
		getSession().getAttribute("user") + " is logged in";
	}

	@POST
	public Boolean testPassword(String userPass){
		System.out.println(userPass);
		boolean returnString = false;
		if (userPass!= null){
			String[] userPassArray = userPass.split(" ");
			if (userPassArray.length==2){
				returnString = testUserAndPassBoolean(userPassArray[0], userPassArray[1]);
			} else {
				returnString = false;
			}
		}
		return returnString;
	}


	@POST
	@Path("form")
	public Boolean testPasswordForm(@FormParam("username") String username, @FormParam("password") String password){
		System.out.println(username + password);
		return testUserAndPassBoolean(username, password);
	}

	@Path("query")
	@POST
	public String testQueryPassword(
			@QueryParam("username") String username, 
			@QueryParam("password") String password){
		return testUserAndPass(username, password);
	}
	@Path("{username}/{password}")
	@POST
	public String testPathPassword(
			@PathParam("username") String username,
			@PathParam("password") String password){
		return testUserAndPass(username, password);
	}

	@Path("json")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Boolean testJSONPassword(UserPass userPass){
		System.out.println(userPass);
		if (userPass!=null &&userPass.getuserName().equals("test") && userPass.getPassword().equals("test")){
			return true;
		}
		return false;
	}


	private String testUserAndPass(String username, String password) {
		if (username==null || password==null) return "parameter mangler";
		return ("test".equals(password) && "test".equals(username)) ?
				"Passwordet er korrekt" : "Passwordet er forkert";
	}

	private boolean testUserAndPassBoolean(String username, String password) {
		return ("test".equals(password) && "test".equals(username));
	}


	private HttpSession getSession() {
		return request.getSession();
	}



}
