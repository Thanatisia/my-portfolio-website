var ROLE="User" /* Role: {Admin|User} */

// --- Processing
function create_test_buttons() {
	if (ROLE === "Admin") {
		// Create buttons only if ROLE is Admin
		let btn_test_Forum = document.createElement("button");
		btn_test_Forum.innerHTML = "Site: Forum";
		btn_test_Forum.type = "submit";
		btn_test_Forum.name = "btn_test_Forum";
		btn_test_Forum.onclick = function()
		{
			// Local Function
			// Go to page
			window.location.href = "sites/test/forum.html"
		};
		document.body.appendChild(btn_test_Forum);
	}
}

create_test_buttons();

/* Real Functions Here */
function toggle_mode()
{
	var curr_mode = "light";
	var element = document.body;
	element.classList.toggle("dark_mode");
}