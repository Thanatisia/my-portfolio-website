/* Validate details before accessing */

function get_input(msg, default_opt)
{
	var res = prompt(msg, default_opt);
	return res;
}

function validate_form(input_msg, valid_token)
{
	valid = false;
	if (input_msg == valid_token)
	{
		valid = true;
	}
	return valid
}

function processing(token)
{
	if (token !== true)
	{
		document.location.href = "../../index.html"
	}
}

input = get_input(msg="Please enter your role");
token = validate_form(input_msg=input, valid_token="Admin");
processing(token);