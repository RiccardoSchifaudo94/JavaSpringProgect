package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/welcome")
public class WelcomeController
{

	@ResponseBody
	@RequestMapping(value="/",produces = "application/json")
	public String ciao() {
		return "ciao";
	}

}